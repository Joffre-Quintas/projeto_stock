import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProductToUnitController {
  static createNewRelationProductUnit = async (req: Request, res: Response) => {
    const { productId, unitId, quantity } = req.body;

    const updateAt = new Date();

    try {
      const existProductUnit = await prisma.productToUnit.findFirst({ where: { productId, unitId } });

      if (existProductUnit) {
        const id = existProductUnit.id;

        const quantityActual = existProductUnit.quantity + quantity;

        await prisma.productToUnit.update({ where: { id }, data: { quantity: quantityActual, updateAt } });

        return res.status(200).json({ message: 'Esse produto estava cadastrado na unidade, sua quantidade atualizada com sucesso e somada a quantidade anterior.' });
      } else {
        const productUnit: any = { productId, unitId, quantity, updateAt };

        await prisma.productToUnit.create({
          data: productUnit,
          include: { product: true, unit: true }
        });

        return res.status(201).json({ message: 'Relação produto e unidade criada com sucesso.' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor.', error });
    }
  };

  static findProductUnit = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if(req.params.id){
      if(Number.isNaN(id)) { return res.status(406).json({message: "Id deve ser um número"}) }
  }

    try {
      const productUnit = await prisma.productToUnit.findMany({ include: { product: true, unit: true } });

      if (id) {
        const findProductUnit = productUnit.find((item) => item.id === id);

        if (findProductUnit) {
          return res.status(200).json(findProductUnit);
        } else {
          return res.status(200).json({ mensagem: 'Relação do produto e unidade não encontrado' });
        }
      } else {
        return res.status(200).json(productUnit);
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  };

  static updateProductUnit = async (req: Request, res: Response) => {
    const { productId, unitId, quantity } = req.body;

    const id = +req.params.id;

    const updateAt = new Date();

    if(req.params.id){
      if(Number.isNaN(id)) { return res.status(406).json({message: "Id deve ser um número"}) }
    }

    try {

      const existProductUnitEqual = await prisma.productToUnit.findFirst({ where: { id } });

      const existTableUpdate = await prisma.productToUnit.findFirst({ where: { productId, unitId }});
              
      if(existTableUpdate && existProductUnitEqual){

        if(quantity){
           const sumQuantity = quantity + existTableUpdate.quantity;

           await prisma.productToUnit.update({ where: { id: existTableUpdate.id }, data: { quantity: sumQuantity, updateAt } });
        } else {
          const sumQuantity = existProductUnitEqual?.quantity + existTableUpdate.quantity;
  
          await prisma.productToUnit.update({ where: { id: existTableUpdate.id }, data: { quantity: sumQuantity, updateAt } });
        }

        return res.status(200).json({ message: 'Atualização feita com sucesso.'})
      }

      await prisma.productToUnit.update({ where: { id }, data: {...req.body, updateAt}})

      return res.status(200).json({ message: 'Relação do produto e unidade atualizada com sucesso.' });
    } catch (error) {
      return res.status(500).json({ message: 'Erro no servidor.', error });
    }
  };

  static deleteProductUnit = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const { productId, unitId } = req.body;

    if(req.params.id){
      if(Number.isNaN(id)) { return res.status(406).json({message: "Id deve ser um número"}) }
    }

    try {
      if(productId && unitId){
        const existProductUnitEqual = await prisma.productToUnit.findFirst({ where: { productId, unitId } });
  
        if(existProductUnitEqual){
          await prisma.productToUnit.delete({
            where: {
              id: existProductUnitEqual.id
            }
          });
        }
      }

      if(id){
        await prisma.productToUnit.delete({ where: { id }});
    
        res.status(200).json({ message: 'Relação do produto e unidade excluído com sucesso.' });
      }      
    } catch (error) {
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  };
}

export default ProductToUnitController;
