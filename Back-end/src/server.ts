
const express = require('express');
import { Routes } from "../routes/_app";
const app = express();

app.use(express.json());
app.use(Routes);
app.listen(3000, () => console.log('Server is runing in port 3000 🚀'))


