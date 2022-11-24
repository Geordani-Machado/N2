import { prisma } from "../../database/prismaCliente";

interface Motorista{
    ID_moto: Number;
    Nome : String;
    Telefone : String;
    Idade : number;
    Sexo : String;
}

export class CreateMotorista{
    async execute({ID_moto, Nome, Telefone, Idade, Sexo} : Motorista){
        //validar se o motorista já existe
        const motoristaExist = await prisma.clients.findFrist({
            where:{
                ID_moto :{
                    mode: "insensitive"
                }
            }
        })

        if(motoristaExist){
            throw new Error("Client already exists")
        }

        //salvar o motorista no banco de dados
        const Motorista = await prisma.clientes.create({
            data:{
                ID_moto,
                Nome,
                Telefone,
                Idade,
                Sexo
            }
        })
    }
}