import { Response , Request } from "express"
import { FindAllMotoristaFromDataReserva } from "./FindAllMotoristaFromDataReserva";


export class FindAllMotoristaFromDataReservaController{
    async handle(request: Request, response: Response){
        const {idade} = request.body;
        const findAllMotoristaFromDataReserva = new FindAllMotoristaFromDataReserva();
        const findMotoristaFromDataReserva = await findAllMotoristaFromDataReserva.execute(idade);

        return response.json(findMotoristaFromDataReserva);

    }
}