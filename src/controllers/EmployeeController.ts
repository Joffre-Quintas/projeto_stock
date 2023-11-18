import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class EmployeeController {
  static findAllEmployee = async (req: Request, res: Response) => {
    try {
      const allEmployees = await prisma.employee.findMany();
      res.status(200).json(allEmployees);
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  };

  static createNewEmployee = async (req: Request, res: Response) => {
    const data = req.body;
    try {
      await prisma.employee.create({ data });

      res.status(201).json({ message: 'Novo empregado cadastrado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  };

  static updateEmployee = async (req: Request, res: Response) => {
    const id = +req.params.id;
    const data = req.body;

    if (Number.isNaN(id)) {
      return res.status(406).json({ message: 'Id deve ser um número' });
    }

    try {
      await prisma.employee.update({
        where: {
          codEmployee: id
        },
        data
      });

      res.status(200).json({ message: 'Dados do empregado atualizado com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  };

  static deleteEmployee = async (req: Request, res: Response) => {
    const id = +req.params.id;

    if (Number.isNaN(id)) {
      return res.status(406).json({ message: 'Id deve ser um número' });
    }

    try {
      await prisma.employee.delete({
        where: {
          codEmployee: id
        }
      });

      res.status(200).json({ message: 'Funcionário excluído com sucesso.' });
    } catch (error) {
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  };
}

export default EmployeeController;
