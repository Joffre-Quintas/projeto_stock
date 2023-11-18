import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

const prisma = new PrismaClient();

class validation {
  static requestBody = (joinSchema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await joinSchema.validateAsync(req.body);
      next();
    } catch (error: any) {
      res.status(400).json({ mensagem: error.message });
    }
  };

  static existEmployee = async (req: Request, res: Response, next: NextFunction) => {
    const id = +req.params.id;

    try {
      const employee = await prisma.employee.findUnique({
        where: {
          codEmployee: id
        }
      });

      if (!employee) {
        return res.status(404).json({ message: 'Funcionario não encontrado!' });
      }

      next();
    } catch (error) {
      res.status(400).json({ mensagem: 'Erro interno no servidor.' });
    }
  };

  static existProduct = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;

    const id = Number(req.params.id);

    try {
      if (name) {
        const slugName = name.toLowerCase().replace(/ /g, '_');

        const slugNameExist = await prisma.product.findUnique({ where: { slugName } });

        if (slugNameExist) {
          return res.status(400).json({ message: 'Esse produto já foi cadastrado.' });
        }
      }

      if (id) {
        const product = await prisma.product.findUnique({
          where: {
            codProduct: id
          }
        });

        if (!product) {
          return res.status(404).json({ message: 'Produto não encontrado!' });
        }
      }

      next();
    } catch (error) {
      res.status(400).json({ mensagem: 'Erro interno no servidor.' });
    }
  };

  static existUnit = async (req: Request, res: Response, next: NextFunction) => {
    const id = +req.params.id;

    try {
      if (id) {
        const unit = await prisma.unit.findUnique({
          where: { id }
        });

        if (!unit) {
          return res.status(404).json({ message: 'Unidade não encontrada!' });
        }
      }

      next();
    } catch (error) {
      res.status(400).json({ mensagem: 'Erro interno no servidor.' });
    }
  };

  static existAddress = async (req: Request, res: Response, next: NextFunction) => {
    const addressId = +req.body.addressId;

    try {
      const address = await prisma.address.findUnique({
        where: { id: addressId }
      });

      if (!address) {
        return res.status(404).json({ message: 'Endereço não encontrado!' });
      }

      next();
    } catch (error) {
      res.status(400).json({ mensagem: 'Erro interno no servidor.' });
    }
  };

  static existAddressRegister = async (req: Request, res: Response, next: NextFunction) => {
    const addressId = req.body.addressId;

    try {
      const findAddress = await prisma.unit.findMany({ where: { addressId } });

      if (findAddress) {
        return res.status(400).json({ message: 'Esse endereço foi cadastrado em outra unidade.' });
      }

      next();
    } catch (error) {
      res.status(400).json({ message: 'Erro interno no servidor.' });
    }
  };

  static existProductUnit = async (req: Request, res: Response, next: NextFunction) => {
    const id = +req.params.id;

    if (req.params.id) {
      if (Number.isNaN(id)) {
        return res.status(406).json({ message: 'Id deve ser um número' });
      }
    }

    try {
      const productUnit = await prisma.productToUnit.findUnique({ where: { id } });

      if (!productUnit) {
        return res.status(404).json({ mensagem: 'A relação do produto e unidade não foi encontrada.' });
      }

      next();
    } catch (error) {
      res.status(400).json({ mensagem: 'Erro interno no servidor.' });
    }
  };

  static productUnit = async (req: Request, res: Response, next: NextFunction) => {
    const { productId, unitId } = req.body;
    const id = +req.params.id;

    if (req.params.id) {
      if (Number.isNaN(id)) {
        return res.status(406).json({ message: 'Id deve ser um número' });
      }
    }

    try {
      if (id) {
        const existProductUnit = await prisma.productToUnit.findUnique({ where: { id } });

        if (!existProductUnit) {
          return res
            .status(200)
            .json({ message: 'Id da relação do produto e unidade não existe, relação não atualizada.' });
        }
      }

      if (productId) {
        const product = await prisma.product.findUnique({
          where: {
            codProduct: Number(productId)
          }
        });

        if (!product) {
          return res.status(404).json({ message: 'Produto não encontrado!' });
        }
      }

      if (unitId) {
        const unit = await prisma.unit.findUnique({
          where: {
            id: +unitId
          }
        });

        if (!unit) {
          return res.status(404).json({ message: 'Unidade não encontrada!' });
        }
      }

      next();
    } catch (error) {
      res.status(400).json({ mensagem: 'Erro interno no servidor.' });
    }
  };

  static update = (req: Request, res: Response, next: NextFunction) => {
    const props = Object.getOwnPropertyNames(req.body);

    if (props.length === 0) {
      return res.status(400).json({ mensagem: 'Atualize pelo menos uma informação.' });
    }

    next();
  };
}

export default validation;
