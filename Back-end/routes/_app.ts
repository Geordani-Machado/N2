import { Router } from "express";
import { CreateMotoristaControler } from "../src/controller/Motorista/CreateMotoristaController";
import {CreateCarroControler} from "../src/modules/Carro/CreateCarroController";
import { GetAllCarrosControler } from "../src/modules/Carro/GetAllCarroController";
import { GetAllMotoristaControler } from "../src/modules/Motorista/GetAllMotoristasController";
import { CreateReservaControler } from "../src/controller/Reserva/CreateReservaController";
import { FindAllCarrosfromColorController } from "../src/controller/FindAllCarrosfromColorController";
import { FindAllCarrosfromYearController } from "../src/modules/Carro/FindAllCarrosFromYearController";
import { FindAllCarrosfromEletricosController } from "../src/modules/Carro/FindAllCarrosFromEletricosController";
import { FindAllMotoristaFromYearController } from "../src/modules/Motorista/FindAllMotoristaFromIdadeController";
import { FindAllMotoristaFromSexoController } from "../src/modules/Motorista/FindAllMotoristaFromSexoController";
import { FindAllCarrosfromPortasController } from "../src/modules/Carro/FindAllCarrosFromPortasController";

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
const findAllMotoristaFromSexoController = new FindAllMotoristaFromSexoController();
const findAllCarrosFromPortasController = new FindAllCarrosfromPortasController();

Routes.post("/motorista/", createMotoristaController.handle);
Routes.post("/carro/", createCarroController.handle);
Routes.post("/reserva/", createReservaController.handle);

Routes.get("/carro", getAllCarrosController.handle);
Routes.get("/motorista", getAllMotoristaController.handle)

// Buscar - (10 Selects que tinham que ser feitos)

Routes.post("/carro/cor" , findAllCarrosfromColorController.handle)
Routes.post("/carro/year", findAllCarrosFromYearController.handle)
Routes.post("/carro/eletrico", findAllCarrosFromEletricosController.handle)
Routes.post("/carro/portas", findAllCarrosFromPortasController.handle)

// Motorista
Routes.post("/motorista/year" , findAllMotoristaFromYearController.handle)
Routes.post("/motorista/sexo" , findAllMotoristaFromSexoController.handle)


Routes.get("/Api" , (req , res) =>{
    return res.send("APi funcionado! 😍🥳")
})


export { Routes } ;

console.log('bateu nas rotas 🛟')