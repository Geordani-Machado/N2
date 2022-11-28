import { Prisma } from "../../database/prismaCliente";

export class GetAllCarros{
    async execute(){
        const AllCarros = await Prisma.carro.findMany({

        });

        return AllCarros;
    }
}