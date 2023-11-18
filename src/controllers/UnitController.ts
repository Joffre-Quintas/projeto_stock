import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
class UnitController {
  static newUnit = async (req: Request, res: Response) => {
    const { addressId, name } = req.body;
    try {
      const addressExist = await prisma.address.findUnique({ where: { id: addressId } });
      if (!addressExist) return res.status(404).json({ message: 'Endereço não encontrado.' });

      await prisma.unit.create({
        data: {
          addressId,
          name
        },
        include: { address: true }
      });
      res.status(201).json({ message: 'Unidade criada com sucesso!' });
    } catch (err) {
      res.status(500).json({ message: 'Erro no servidor!' });
    }
  };

  static findUnit = async (req: Request, res: Response) => {
    const id = +req.params.id;

    try {
      if (req.params.id) {
        if (Number.isNaN(id)) {
          return res.status(406).json({ message: 'Id deve ser um número' });
        }
      }

      if (id) {
        const unit = await prisma.unit.findUnique({ where: { id }, include: { address: true } });

        !unit ? res.status(200).json({ message: 'Unidade não cadastrada' }) : res.status(200).json(unit);
      } else {
        const allUnit = await prisma.unit.findMany({ include: { address: true } });

        res.status(200).json(allUnit);
      }
    } catch (err) {
      res.status(500).json({ message: 'Erro no servidor.', err });
    }
  };
}

export default UnitController;
