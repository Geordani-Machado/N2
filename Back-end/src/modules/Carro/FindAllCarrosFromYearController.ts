import { Response , Request } from "express"
import { FindAllCarrosFromYear } from "./FindAllCarrosFromYear";


export class FindAllCarrosfromYearController{
    async handle(request: Request, response: Response){
        const {Ano_Fabricante} = request.body;
        const findAllCarrosfromYear = new FindAllCarrosFromYear();
        const findCarrosFromYear = await findAllCarrosfromYear.execute(Ano_Fabricante);

        return response.json(findCarrosFromYear);

    }
}