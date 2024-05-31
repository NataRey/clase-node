//const express = require('express')
import express from "express";
//despues de instalar morgan lo importo que sirve para ver en la consola las peticiones
import morgan from "morgan"; //verificar por que desaparece cuando lo importo 
// importo la ruta de rutaUsuarios, no olvidar nunca validar que termine en .js
import enrutadorUsuarios from "./routes/rutaUsuarios.js";

const servidor = express();
//antes de las rutas le digo a mi servidor que use mi metodo json
servidor.use(morgan('dev'));
servidor.use(express.json());
servidor.use("/usuarios", enrutadorUsuarios);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.status(404).send("No encontrado");
})

export default servidor;
