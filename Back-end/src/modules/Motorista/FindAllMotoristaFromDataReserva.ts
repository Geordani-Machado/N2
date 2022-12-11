import { Prisma } from "../../database/prismaCliente"

export class FindAllMotoristaFromDataReserva{
    async execute(_data_inicio : string){
        const FindMotoristaFromDataReserva = await Prisma.reserva.findMany({
            where:{
                data_inicio: _data_inicio
            }
        });
        return FindMotoristaFromDataReserva;
    }
}