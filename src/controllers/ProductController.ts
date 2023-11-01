import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient();

class ProductController {
    static findAllProduct = async (req: Request, res: Response) => {
        const id = Number(req.params.id);
        try {
            if(id){
                const findOneProduct = await prisma.product.findUnique({ where: { codProduct: id } })

                if(findOneProduct){
                    res.status(200).json(findOneProduct);
                } else {
                    res.status(400).json({ mensagem: "O produto não existe."});
                }
            } else {
                const allProducts = await prisma.product.findMany();
                res.status(200).json(allProducts);
            }
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });
        }
    }

    static createNewProduct = async (req:Request, res:Response ) => {
        const { name, quantity, price } = req.body;
        
        const slugName = name.toLowerCase().replace(/ /g, '_');
        
        const createdAt = new Date;
        
        const product: any = { name, slugName, quantity, price, createdAt};      
        
        try {
            await  prisma.product.create({ data: product });
            
            res.status(201).json({ message: "Novo produto cadastrado com sucesso."});
        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor.", error });
        }
    }

    static updateProduct = async (req: Request, res: Response) =>{
        const { id, name, quantity, price } = req.body; 

        const slugName = name.toLowerCase().replace(/ /g, '_');

        const updateAt = new Date();

        try {
            await prisma.product.update({
                where: {
                    codProduct: id
                },
                data: {
                    name, slugName, quantity, price, updateAt
                }
            });

            res.status(200).json({ message: "Dados do produto atualizado com sucesso." });            
        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor." });
        }
    }

    static deleteProduct = async (req: Request, res: Response) =>{
        const { id } = req.body;

        try {
            await prisma.product.delete({
                where: {
                    codProduct: Number(id),
                },
              });
    
            res.status(200).json({ message: "Produto excluído com sucesso." });
        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}

export default ProductController;
