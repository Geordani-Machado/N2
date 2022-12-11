import { Response , Request } from "express"
import { FindAllMotoristaFromSexo } from "./FindAllMotoristaFromSexo";


export class FindAllMotoristaFromSexoController{
    async handle(request: Request, response: Response){
        const {sexo} = request.body;
        const findAllMotoristaFromSexo = new FindAllMotoristaFromSexo();
        const FindMotoristaFromSexo = await findAllMotoristaFromSexo.execute(sexo);

        return response.json(FindMotoristaFromSexo);

    }
}