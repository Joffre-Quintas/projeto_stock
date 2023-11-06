import { Request, Response, response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class StockController {
  static consultAssetValue = async (req: Request, res: Response) => {
    try {
      const allStock = await prisma.productToUnit.findMany({ include: { product: true, unit: true } });

      const groupPerUnit = allStock.reduce((acc: { [unitName: string]: any[] }, item) => {
        const unitName = item.unit.name;

        if (!acc[unitName]) {
          acc[unitName] = [];
        }
        acc[unitName].push({ ...item.product, quantity: item.quantity });

        return acc;
      }, {});

      const totalAssetsPerUnit: { [unitName: string]: number } = {};

      for (const unitName in groupPerUnit) {
        if (groupPerUnit.hasOwnProperty(unitName)) {
          const unitItems = groupPerUnit[unitName];

          const totalAsset = unitItems.reduce((total: number, item: any) => {
            total += item.price * item.quantity;
            return total;
          }, 0);

          totalAssetsPerUnit[unitName] = totalAsset;
        }
      }
      return res.json(groupPerUnit);
    } catch (error) {
      res.status(500).json({ message: 'Erro no servidor.' });
    }
  };
}

export default StockController;
