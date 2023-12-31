import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProductController {
  static findAllProduct = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (req.params.id) {
      if (Number.isNaN(id)) {
        return res.status(406).json({ message: 'Id deve ser um número' });
      }
    }

    try {
      if (id) {
        const findOneProduct = await prisma.product.findUnique({ where: { codProduct: id } });

        if (findOneProduct) {
          res.status(200).json(findOneProduct);
        } else {
          res.status(400).json({ mensagem: 'O produto não existe.' });
        }
      } else {
        const allProducts = await prisma.product.findMany();
        res.status(200).json(allProducts);
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  };

  static createNewProduct = async (req: Request, res: Response) => {
    const { name, price } = req.body;

    const slugName = name.toLowerCase().replace(/ /g, '_');

    const createdAt = new Date();

    const product: any = { name, slugName, price, createdAt };

    try {
      await prisma.product.create({ data: product });

      res.status(201).json({ message: 'Novo produto cadastrado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno no servidor.', error });
    }
  };

  static updateProduct = async (req: Request, res: Response) => {
    const id = +req.params.id;

    const { name, price } = req.body;

    const slugName = name.toLowerCase().replace(/ /g, '_');

    const updateAt = new Date();

    if (req.params.id) {
      if (Number.isNaN(id)) {
        return res.status(406).json({ message: 'Id deve ser um número' });
      }
    }

    try {
      await prisma.product.update({
        where: {
          codProduct: id
        },
        data: {
          name,
          slugName,
          price,
          updateAt
        }
      });

      res.status(200).json({ message: 'Dados do produto atualizado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  };

  static deleteProduct = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (req.params.id) {
      if (Number.isNaN(id)) {
        return res.status(406).json({ message: 'Id deve ser um número' });
      }
    }

    try {
      await prisma.product.delete({
        where: {
          codProduct: id
        }
      });

      res.status(200).json({ message: 'Produto excluído com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  };
}

export default ProductController;
