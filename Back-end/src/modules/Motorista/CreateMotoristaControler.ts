import {Request , Response} from "express";
import { CreateMotorista } from "./CreateMotorista";


export class CreateMotoristaControler{
    async handle(request: Request, response : Response){

        const {ID_moto, Nome, Telefone, Idade, Sexo} = request.body

        const createMotorista = new CreateMotorista();
        const  result = await createMotorista.execute({
                ID_moto,
                Nome,
                Telefone,
                Idade,
                Sexo
        })
            return response.json(result);
    }
    }