import { Request , Response } from "express";
import { CreateMotorista } from "./CreateMotorista";


export class CreateMotoristaControler{
    async handle(request: Request, response : Response){

        const {nome, telefone, idade, sexo} = request.body

        const createMotorista = new CreateMotorista();
        const  result = await createMotorista.execute({
                nome,
                telefone,
                idade,
                sexo
        })
            return response.json(`Motorista cadastrado com suceso! ${JSON.stringify(result)} `);
    }
    }