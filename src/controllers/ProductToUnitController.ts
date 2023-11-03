import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProductToUnitController{
    static createNewRelationProductUnit = async (req:Request, res:Response) => {
        const { productId, unitId, quantity } = req.body;

        const updateAt = new Date();

        try {
            const existProductUnit = await prisma.productToUnit.findFirst({ where: { productId, unitId }});

            if(existProductUnit){
                const id = existProductUnit.id;

                const quantityActual = existProductUnit.quantity + quantity;

                await prisma.productToUnit.update({ where: {id}, data: {quantity: quantityActual, updateAt}})
            
                return res.status(200).json({ message: 'Relação produto e unidade já existe, quantidade atualizada com sucesso.' });
            } else {
                const productUnit: any = { productId, unitId, quantity, updateAt };
    
                await prisma.productToUnit.create({ 
                    data: productUnit,                   
                    include: { product: true, unit: true },
                })
    
                return res.status(201).json({ message: 'Relação produto e unidade criada com sucesso.' });
            }

        } catch (error) {
            res.status(500).json({ message: "Erro no servidor.", error });
        }
    }

    static findProductUnit = async (req:Request, res:Response) => {
        const id = Number(req.params.id);

        try {
        const productUnit = await prisma.productToUnit.findMany({ include: { product: true, unit: true } });

        if(id){
            const findProductUnit = productUnit.find( item => item.id === id);

            if(findProductUnit){
                return res.status(200).json(findProductUnit);
            }else{
                return res.status(200).json({ mensagem: "Relação do produto e unidade não encontrado"});
            }
        } else {
            return res.status(200).json(productUnit);
        }

        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });
        }
    } 

    static updateProductUnit = async (req: Request, res: Response) => {
        const { productId, unitId, quantity } = req.body;

        const id = Number(req.params.id);

        const updateAt = new Date();

        try {
            if(productId && unitId){
                const existProductUnitEqual = await prisma.productToUnit.findFirst({ where: { productId, unitId }});
    
                if(existProductUnitEqual){
                    const id = existProductUnitEqual.id;
    
                    await prisma.productToUnit.update({ where: {id}, data: {quantity, updateAt}})
                
                    return res.status(200).json({ message: 'Relação produto e unidade já existe, quantidade atualizada com sucesso.' });
                }
            }
            
            await prisma.productToUnit.update({ where: { id }, data: { productId, unitId, quantity, updateAt}})
                
            return res.status(200).json({ message: 'Relação do produto e unidade atualizada com sucesso.' });
         
        } catch (error) {
            return res.status(500).json({ message: "Erro no servidor.", error });
        }
    }

    static deleteProductUnit = async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            await prisma.productToUnit.delete({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json({ message: "Relação do produto e unidade excluído com sucesso." });

        } catch (error) {
            res.status(500).json({ message: "Erro interno no servidor." });
        }
    }
}

export default ProductToUnitController;