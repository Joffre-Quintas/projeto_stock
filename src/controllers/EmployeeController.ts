import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class EmployeeController {
    static findAllEmployee = async (req: Request, res: Response) => {
        try {
            const allEmployees = await prisma.employee.findMany();
            res.status(200).json(allEmployees);            
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });
        }
    }

    static createNewEmployee = async (req: Request, res: Response) => {
        try {
            const { fullName, hireDate, office } = req.body;
            const employee = { fullName, hireDate, office };
            await prisma.employee.create({ data: employee});

            res.status(201).json({ message: "Novo empregado cadastrado com sucesso"});
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });
        }
    }

    static updateEmployee = async (req: Request, res: Response) => {
        try {
            const { id, ...rest } = req.body;
            
            await prisma.employee.update({
                where: {
                    codEmployee: +id,
                },
                data: {
                    ...rest
                }
            });
            
            res.status(200).json({ message: "Dados do empregado atualizado com sucesso." });
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });
        }
    }

    static deleteEmployee = async (req: Request, res: Response) => {
        try {
            const { id } = req.body;
    
            await prisma.employee.delete({
                where: {
                    codEmployee: +id,
                },
              });
    
            res.status(200).json({ message: "Funcionário excluído com sucesso." });
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor." });
        }
    }
}

export default EmployeeController;