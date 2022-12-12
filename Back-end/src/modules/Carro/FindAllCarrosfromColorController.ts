import { Response , Request } from "express"
import { FindAllCarrosfromColor } from "./FindAllCarrosfromColor"


export class FindAllCarrosfromColorController{
    async handle(request: Request, response: Response){
        const {cor} = request.body;
        const findAllCarrosfromColor = new FindAllCarrosfromColor();
        const findCarrosfromColor = await findAllCarrosfromColor.execute(cor);

        return response.json(findCarrosfromColor);
        

    }
    
}
