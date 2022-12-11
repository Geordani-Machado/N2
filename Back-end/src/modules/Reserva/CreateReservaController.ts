import { Request, Response } from "express";
import { CreateReserva } from "./CreateReserva";

export class CreateReservaControler{
    async handle(request: Request, response: Response){

        const{id_moto, id_carro, data_inicio, data_fim} = request.body

        const createReserva = new CreateReserva();
        const result = await createReserva.execute({
            id_moto,
            id_carro,
            data_inicio,
            data_fim
        })
        return response.json(`Motorista cadastrado com sucesso! ${JSON.stringify(result)} `);
    }
}