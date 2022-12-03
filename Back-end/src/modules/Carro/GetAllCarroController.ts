import { Response , Request } from "express";
import { GetAllCarros } from "./GetAllCarros";

export class GetAllCarrosControler{
    async handle(request: Request, response : Response) {
        const getAllCarros = new GetAllCarros();

        const allCarros = await getAllCarros.execute();

        return response.json(allCarros);
    }
}