
import { Prisma } from "../../database/prismaCliente";

interface ICarro{
    nome :           string
    cor :            string
    Ano_Fabricante : string
    isReserved     : boolean
    url :            string
    isEletrico :     boolean   
    portas:          string   
}

export class CreateCarro{
    async execute({nome, cor, Ano_Fabricante, isReserved, url, isEletrico, portas} : ICarro){
    /*
    const carroExist = await Prisma.carro.findFirst({
        
    })

    if(carroExist){
        throw new Error("Client already exists")
    }
*/
    const Carro = await Prisma.carro.create({
        data:{
            nome,
            cor,
            Ano_Fabricante,
            isReserved,
            url,
            isEletrico,
            portas
        }
    })

    return Carro;
    }   
}