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

  static deleteUnit = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (Number.isNaN(id)) {
      return res.status(406).json({ message: 'Id deve ser um número' });
    }

    try {
      const isExist = await prisma.productToUnit.findFirst({ where: { unitId: id } });

      if (!!isExist) {
        return res.status(403).json({
          message: 'Esta unidade está vinculada a algum produto. Você deve desvincular a unidade ao produto.'
        });
      }

      await prisma.unit.delete({ where: { id } });
      res.status(200).json({ message: 'Unidade deletada com sucesso!' });
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor.', err });
    }
  };

  static updateUnit = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const updateUnit = req.body;

    if (Number.isNaN(id)) {
      return res.status(406).json({ message: 'Id deve ser um número' });
    }

    try {
      await prisma.unit.update({ where: { id }, data: updateUnit });
      res.status(200).json({ message: 'Unidade atualizada com sucesso!' });
    } catch (err) {
      return res.status(500).json({ message: 'Erro no servidor.', err });
    }
  };
}

export default UnitController;
