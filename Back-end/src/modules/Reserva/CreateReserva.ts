import { Prisma } from "../../database/prismaCliente";

interface IReserva{
    id_moto:     number;      
    id_carro:    number;     
    data_inicio: string;
    data_fim:    string;
}

export class CreateReserva{
   async execute({id_moto, id_carro, data_inicio, data_fim} : IReserva){

    const Reserva = await Prisma.reserva.create({
        data:{
            data_inicio,
            data_fim,
            id_moto,
            id_carro
        }
      
    })

    return Reserva;

   }
   
}