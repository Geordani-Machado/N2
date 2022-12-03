import { Router } from "express";
import { CreateMotoristaControler } from "../src/modules/Motorista/CreateMotoristaControler";
import {CreateCarroControler} from "../src/modules/Carro/CreateCarroController";
import { GetAllCarrosControler } from "../src/modules/Carro/GetAllCarroController";
import { GetAllMotoristaControler } from "../src/modules/Motorista/GetAllMotoristasControles";
import { CreateReservaControler } from "../src/modules/Reserva/CreateReservaControler";
import { FindAllCarrosfromColorController } from "../src/modules/Carro/FindAllCarrosfromColorController";

const Routes = Router();

const createMotoristaController = new CreateMotoristaControler();
const createCarroController = new CreateCarroControler();
const getAllCarrosController = new GetAllCarrosControler();
const getAllMotoristaController = new GetAllMotoristaControler();
const createReservaController = new CreateReservaControler();
const findAllCarrosfromColorController = new FindAllCarrosfromColorController();

Routes.post("/motorista/", createMotoristaController.handle);
Routes.post("/carro/", createCarroController.handle);
Routes.post("/reserva/", createReservaController.handle);

Routes.get("/carro", getAllCarrosController.handle);
Routes.get("/motorista", getAllMotoristaController.handle)
Routes.get("/carro/cor" , findAllCarrosfromColorController.handle)

Routes.get("/Api" , (req , res) =>{
    return res.send("APi funcionado! 😍🥳")
})


export { Routes } ;

console.log('batteu nas rotas 🛟')