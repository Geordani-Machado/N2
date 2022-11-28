import { Router } from "express";
import { CreateMotoristaControler } from "../src/modules/Motorista/CreateMotoristaControler";
import {CreateCarroControler} from "../src/modules/Carro/CreateCarroControler";
import { GetAllCarrosControler } from "../src/modules/Carro/GetAllCarroControles";
import { GetAllMotoristaControler } from "../src/modules/Motorista/GetAllMotoristasControles";
import { CreateReservaControler } from "../src/modules/Reserva/CreateReservaControler";

const Routes = Router();

const createMotoristaControler = new CreateMotoristaControler();
const createCarroControler = new CreateCarroControler();
const getAllCarrosControler = new GetAllCarrosControler();
const getAllMotoristaControler = new GetAllMotoristaControler();
const createReservaControler = new CreateReservaControler();

Routes.post("/motorista/", createMotoristaControler.handle);
Routes.post("/carro/", createCarroControler.handle);
Routes.post("/reserva/", createReservaControler.handle);

Routes.get("/carro", getAllCarrosControler.handle);
Routes.get("/motorista", getAllMotoristaControler.handle)

Routes.get("/Api" , (req , res) =>{
    return res.send("APi funcionado! 😍🥳")
})



export { Routes } ;

console.log('batteu nas rotas 🛟')