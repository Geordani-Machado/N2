import { Prisma } from "../../database/prismaCliente";
 
interface IMotorista{
    nome : string;
    telefone : string;
    idade : string;
    sexo : string;
}

export class CreateMotorista{
    async execute({nome, telefone, idade, sexo} : IMotorista){
        //validar se o motorista já existe
        
        /*
        const motoristaExist = await Prisma.motorista.findFirst({
            where:{
                id_moto :{
                }
            }
        })

        if(motoristaExist){
            throw new Error("Client already exists")
        }
        */

        //salvar o motorista no banco de dados
        const Motorista = await Prisma.motorista.create({
            data:{
                nome,
                telefone,
                idade,
                sexo
            }
        })

        return Motorista;
    }
}