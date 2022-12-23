import { Response , Request } from "express";
import { GetAllReserva } from "./GetAllReserva";

export class GetAllMotoristaControler{
    async handle(request: Request, response : Response) {
        const getAllReserva = new GetAllReserva();

        const allReserva = await getAllReserva.execute();

        return response.json(allReserva);
    }
}