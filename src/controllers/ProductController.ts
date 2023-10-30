import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

class ProductController {
    static findAllProduct = async (req: Request, res: Response) => {
        try {
            const allProducts = await prisma.product.findMany();
            res.status(200).json(allProducts)
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });
        }
    }

    static createNewProduct = async (req:Request, res:Response ) => {
        const { name, quantity, price, unit} = req.body;

        const slugName = name.toLowerCase().replace(/ /g, '_');

        const createdAt = new Date();
        
        const product: any = { name, slugName, quantity, price, createdAt, unit}; 
        
        
        try {
            await  prisma.product.create({ data: product });

            res.status(201).json({ message: "Novo produto cadastrado com sucesso."});

        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });
        }
    }


}

export default ProductController;
