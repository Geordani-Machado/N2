
import { Prisma } from "../../database/prismaCliente"


export class FindAllCarrosfromColor{
    async execute(_cor : string){
        const carformcolor = await Prisma.carro.findMany({
            where:{
                cor : _cor
            }
        });
        return carformcolor;
    }
}