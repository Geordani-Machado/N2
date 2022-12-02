
import { Prisma } from "../../database/prismaCliente";

interface ICarro{
    nome :           string
    cor :            string
    Ano_Fabricante : string
    isReserved     : boolean
    url :            string
}

export class CreateCarro{
    async execute({nome, cor, Ano_Fabricante, isReserved, url} : ICarro){
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
            url
        }
    })

    return Carro;
    }   
}