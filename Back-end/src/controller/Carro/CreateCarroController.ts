import { Request , Response } from "express";
import { CreateCarro } from "./CreateCarros"

export class CreateCarroControler {
    async handle(request: Request, response: Response){
        const {nome, cor, Ano_Fabricante, isReserved, url, isEletrico , portas} = request.body

        const createCarro = new CreateCarro();
        const result = await createCarro.execute({
            nome,
            cor,
            Ano_Fabricante,
            isReserved,
            url,
            isEletrico,
            portas,
        })

        return response.json(`Motorista cadastrado com suceso! ${JSON.stringify(result)} `);
    }
}