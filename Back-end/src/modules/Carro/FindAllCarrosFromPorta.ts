
import { Prisma } from "../../database/prismaCliente"


export class FindAllCarrosFromPortas{
    async execute(_portas : string){
        const carfromportas = await Prisma.carro.findMany({
            where:{
                portas: _portas 
            }
        });
        return carfromportas;
    }
}