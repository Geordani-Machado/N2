import { Response , Request } from "express"
import { FindAllCarrosFromPortas } from "./FindAllCarrosFromPortas";


export class FindAllCarrosfromPortasController{
    async handle(request: Request, response: Response){
        const {portas} = request.body;
        const findAllCarrosfromPortas = new FindAllCarrosFromPortas();
        const findCarrosFromPortas = await findAllCarrosfromPortas.execute(portas);

        return response.json(findCarrosFromPortas);

    }
}