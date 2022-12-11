import { Response , Request } from "express"
import { FindAllReservaFromData } from "./FindAllReservaFromData";


export class FindAllReservaFromDataController{
    async handle(request: Request, response: Response){
        const {_data_inicio} = request.body;
        const findAllReservaFromData = new FindAllReservaFromData();
        const findReservaFromData = await findAllReservaFromData.execute(_data_inicio);

        return response.json(findReservaFromData);

    }
}