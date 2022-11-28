import { Response , Request } from "express";
import { GetAllMotorista } from "./GetAllMotorista";

export class GetAllMotoristaControler{
    async handle(request: Request, response : Response) {
        const getAllMotorista = new GetAllMotorista();

        const allCarros = await getAllMotorista.execute();

        return response.json(allCarros);
    }
}