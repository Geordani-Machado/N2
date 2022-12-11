import { Prisma } from "../../database/prismaCliente";

export class GetAllReserva{
    async execute(){
        const AllReserva = await Prisma.reserva.findMany({

        });

        return AllReserva;
    }
}