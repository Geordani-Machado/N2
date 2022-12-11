import { Prisma } from "../../database/prismaCliente"


export class FindAllCarrosFromEletricos{
    async execute(_Eletricos : boolean){
        const carfromEletricos = await Prisma.carro.findMany({
            where:{
                isEletrico: _Eletricos 
            }
        });
        return carfromEletricos;
    }
}