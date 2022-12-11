import { Router } from "express";
import { CreateMotoristaControler } from "../src/modules/Motorista/CreateMotoristaControler";
import {CreateCarroControler} from "../src/modules/Carro/CreateCarroController";
import { GetAllCarrosControler } from "../src/modules/Carro/GetAllCarroController";
import { GetAllMotoristaControler } from "../src/modules/Motorista/GetAllMotoristasControles";
import { CreateReservaControler } from "../src/modules/Reserva/CreateReservaControler";
import { FindAllCarrosfromColorController } from "../src/modules/Carro/FindAllCarrosfromColorController";
import { FindAllCarrosfromYearController } from "../src/modules/Carro/FindAllCarrosFromYearController";
import { FindAllCarrosfromEletricosController } from "../src/modules/Carro/FindAllCarrosFromEletricosController";
import { FindAllMotoristaFromYear } from "../src/modules/Motorista/FindAllMotoristaFromIdade";
import { FindAllMotoristaFromYearController } from "../src/modules/Motorista/FindAllMotoristaFromIdadeController";

const Routes = Router();

const createMotoristaController = new CreateMotoristaControler();
const createCarroController = new CreateCarroControler();
const getAllCarrosController = new GetAllCarrosControler();
const getAllMotoristaController = new GetAllMotoristaControler();
const createReservaController = new CreateReservaControler();
const findAllCarrosfromColorController = new FindAllCarrosfromColorController();
const findAllCarrosFromYearController = new FindAllCarrosfromYearController();
const findAllCarrosFromEletricosController = new FindAllCarrosfromEletricosController();
const findAllMotoristaFromYearController = new FindAllMotoristaFromYearController();

Routes.post("/motorista/", createMotoristaController.handle);
Routes.post("/carro/", createCarroController.handle);
Routes.post("/reserva/", createReservaController.handle);

Routes.get("/carro", getAllCarrosController.handle);
Routes.get("/motorista", getAllMotoristaController.handle)

// Buscar - (10 Selects que tinham que ser feitos)

Routes.get("/carro/cor" , findAllCarrosfromColorController.handle)
Routes.get("/carro/year", findAllCarrosFromYearController.handle)
Routes.get("/carro/eletrico", findAllCarrosFromEletricosController.handle)

// Motorista
Routes.get("/motorista/year" , findAllMotoristaFromYearController.handle)



Routes.get("/Api" , (req , res) =>{
    return res.send("APi funcionado! 😍🥳")
})


export { Routes } ;

console.log('bateu nas rotas 🛟')