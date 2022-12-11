
import { Prisma } from "../../database/prismaCliente"


export class FindAllCarrosfromColor{
    async execute(_cor : string){
        const carfromcolor = await Prisma.carro.findMany({
            where:{
                cor : _cor
            }
        });
        return carfromcolor;
    }
}