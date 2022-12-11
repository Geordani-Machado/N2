import { Prisma } from "../../database/prismaCliente"

export class FindAllMotoristaFromSexo{
    async execute(_sexo : string){
        const FindMotoristaFromSexo = await Prisma.motorista.findMany({
            where:{
                sexo: _sexo
            }
        });
        return FindMotoristaFromSexo;
    }
}