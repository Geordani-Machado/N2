import { Response , Request } from "express"
import { FindAllMotoristaFromYear } from "./FindAllMotoristaFromIdade";


export class FindAllMotoristaFromYearController{
    async handle(request: Request, response: Response){
        const {idade} = request.body;
        const findAllMotoristaFromYear = new FindAllMotoristaFromYear();
        const findMotoristaFromYear = await findAllMotoristaFromYear.execute(idade);

        return response.json(findMotoristaFromYear);

    }
}