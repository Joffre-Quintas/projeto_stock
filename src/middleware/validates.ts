import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

const prisma = new PrismaClient();

class validation{
    static requestBody = (joinSchema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
      try {
        await joinSchema.validateAsync(req.body);
        next();
      } catch (error: any) {
        res.status(400).json({ mensagem: error.message });
      }
    };

    static existEmployee = async (req: Request, res: Response, next: NextFunction) => {
      const { id } = req.body;

      try {
        const employee = await prisma.employee.findUnique({ 
          where: { 
            cod_employee:Number(id) 
          } 
        });

        if(!employee){
          return res.status(404).json({ message: "Funcionario não encontrado!" });
        }

        next(); 
      } catch (error) {
        res.status(400).json({ mensagem: "Erro interno no servidor."})
      }
    }

    static existProduct = async (req: Request, res: Response, next: NextFunction) => {
      const { id, name } = req.body;

      try {
        
        if(name){
          const slugName = name.toLowerCase().replace(/ /g, '_');
          
          const slugNameExist = await prisma.product.findUnique({ where: { slugName }})
  
          if(slugNameExist){
            return res.status(400).json({ message: "Esse produto já foi cadastrado."});
          }
        }

        if(id){
          const product = await prisma.product.findUnique({ 
            where: { 
              codProduct: Number(id) 
            } 
          });
  
          if(!product){
            return res.status(404).json({ message: "Produto não encontrado!" });
          }
        }

        next(); 
      } catch (error) {
        res.status(400).json({ mensagem: "Erro interno no servidor."})
      }
    }

    static update = (req: Request, res:Response, next: NextFunction) => {
      const props = Object.getOwnPropertyNames(req.body)

      if(props.length <= 1){
        return res.status(400).json({ mensagem: "Atualize pelo menos uma informação."})
      }
      next();
    }
  }

export default validation;
