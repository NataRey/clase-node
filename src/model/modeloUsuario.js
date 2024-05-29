//importo  unas dependencias de mongoose como Schema, model
import { Schema, model } from "mongoose";
//creo una constante para asociar al esquema 

const esquemaUsuario = new Schema(
 //dentro pongo mi objeto
 {
    //voy a indicar como debe estar estructurado mi Schema
// pongo los datos que necesite para el usuario en este caso
    "nombre": {type: String, required: true},
    "telefono":{type: Number, min: 10, max: 12,required: true},
    "email": {type: String, required: true},
    "contrasenia": {type: String, required: true},
    "foto": {type: String, required: false},
    "pais": {type: String, required: true}
 })

 // exporto el metodo del modelo al cual le voy a pasar dos argumentos
 // el primero es el nombre en este caso voy a poner Usuario por que estos datos los va a ingresar un usuario, cabe recordar que cada parametro se separa por comas
 //y la constante que tiene todos los datos que va a ingresar el usuario que es esquemaUsuario
 export default model("Usuario", esquemaUsuario);
   
