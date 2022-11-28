import { Router } from "express";
import { CreateMotoristaControler } from "../src/modules/Motorista/CreateMotoristaControler";
import {CreateCarroControler} from "../src/modules/Carro/CreateCarroControler";
import { GetAllCarrosControler } from "../src/modules/Carro/GetAllCarroControles";
import { GetAllMotoristaControler } from "../src/modules/Motorista/GetAllMotoristasControles";

const Routes = Router();

const createMotoristaControler = new CreateMotoristaControler();
const createCarroControler = new CreateCarroControler();
const getAllCarrosControler = new GetAllCarrosControler();
const getAllMotoristaControler = new GetAllMotoristaControler();

Routes.post("/motorista/", createMotoristaControler.handle);
Routes.post("/carro/", createCarroControler.handle);

Routes.get("/carro", getAllCarrosControler.handle);
Routes.get("/motorista", getAllMotoristaControler.handle)

Routes.get("/Api" , (req , res) =>{
    return res.send("APi funcionado! 😍🥳")
})



export { Routes } ;

console.log('batteu nas rotas 🛟')