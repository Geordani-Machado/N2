import { Prisma } from "../../database/prismaCliente"

export class FindAllMotoristaFromYear{
    async execute(_idade : string){
        const FindMotoristaFromYear = await Prisma.motorista.findMany({
            where:{
                idade: _idade 
            }
        });
        return FindMotoristaFromYear;
    }
}