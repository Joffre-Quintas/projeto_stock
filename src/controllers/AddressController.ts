import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class AddressController {
  static findAllAddress = async (req: Request, res: Response) => {
    try {
      const allAddress = await prisma.address.findMany();
      res.status(200).json(allAddress);
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  };

  static newAddress = async (req: Request, res: Response) => {
    const { cep, state, city, neighborhood, street, number, complement } = req.body;

    const address = {
      cep,
      state,
      city,
      neighborhood,
      street,
      number: number || null,
      complement: complement || null
    };
    try {
      await prisma.address.create({ data: address });
      res.status(201).json({ message: 'Endereço adicionado com sucesso!' });
    } catch (err) {
      res.status(500).json({ message: 'Erro no servidor.', err });
      console.log(err);
    }
  };

  static deleteAddress = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(406).json({ message: 'Id deve ser um número' });
    }

    try {
      const address = await prisma.address.findUnique({ where: { id } });
      if (address) {
        await prisma.address.delete({ where: { id } });
        res.status(200).json({ message: 'Endereço excluído com sucesso.' });
      } else {
        res.status(404).json({ message: 'Endereço não encontrado.' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Erro no servidor.', err });
    }
  };

  static updateAddress = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const data = req.body;

    if (Number.isNaN(id)) {
      return res.status(406).json({ message: 'Id deve ser um número' });
    }

    try {
      const address = await prisma.address.findUnique({ where: { id } });

      if (address) {
        await prisma.address.update({
          where: { id },
          data
        });

        res.status(200).json({ message: 'Endereço atualizado com sucesso!' });
      } else {
        res.status(404).json({ message: 'Endereço não encontrado!' });
      }
    } catch (err) {
      res.status(500).json({ message: 'Erro no servidor.', err });
    }
  };
}

export default AddressController;
