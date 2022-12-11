
import { Prisma } from "../../database/prismaCliente"


export class FindAllCarrosFromYear{
    async execute(_Ano_Fabricante : string){
        const carfromyear = await Prisma.carro.findMany({
            where:{
                Ano_Fabricante: _Ano_Fabricante 
            }
        });
        return carfromyear;
    }
}