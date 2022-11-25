import { Router } from "express";
import { CreateMotoristaControler } from "./modules/Motorista/CreateMotoristaControler";

const routes = Router();

const createMotoristaControler = new CreateMotoristaControler();

routes.post("/motorista/", createMotoristaControler.handle);

export { routes } ;