import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProductToUnitController{
    static createNewRelationProductUnit = async (req:Request, res:Response) => {
        const { productId, unitId, quantity } = req.body;

        const updateAt = new Date();

        try {
            const productUnit: any = { productId, unitId, quantity, updateAt };

            await prisma.productToUnit.create({ 
                data: productUnit,                   
                include: { product: true, unit: true },
            })

            res.status(201).json({ message: 'Relação criada com sucesso.' });
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor.", error });
        }
    }

    static findProductUnit = async (req:Request, res:Response) => {
        try {
            const productUnit = await prisma.productToUnit.findMany();

            res.status(201).json(productUnit);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });

        }
    } 
}

export default ProductToUnitController;