import { Request,Response } from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class AddressController {

  static findAllAdress = async (req: Request,res: Response) => {
    try {
      const allAddress = await prisma.address.findMany()
      res.status(200).json(allAddress)
    } catch (error) {
      res.status(500).json({message: 'Erro no servidor.'})
    }
  }
}

export default AddressController