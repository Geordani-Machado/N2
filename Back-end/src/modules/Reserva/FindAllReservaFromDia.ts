import { Prisma } from "../../database/prismaCliente"


export class FindAllReservaFromData{
    async execute(_data_inicio: string){
        const FindReservaFromData = await Prisma.reserva.findMany({
            where:{
                data_inicio: _data_inicio
            }
        });
        return FindAllReservaFromData;
    }
}