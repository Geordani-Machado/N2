import { Prisma } from "../../database/prismaCliente";

export class GetAllMotorista{
    async execute(){
        const AllMotoristas = await Prisma.motorista.findMany({

        });

        return AllMotoristas;
    }
}