import { Response , Request } from "express"
import { FindAllCarrosFromEletricos } from "./FindAllCarrosFromEletricos";


export class FindAllCarrosfromEletricosController{
    async handle(request: Request, response: Response){
        const {isEletrico} = request.body;
        const findAllCarrosfromEletrico = new FindAllCarrosFromEletricos();
        const findCarrosFromEletricos = await findAllCarrosfromEletrico.execute(isEletrico);

        return response.json(findCarrosFromEletricos);

    }
}