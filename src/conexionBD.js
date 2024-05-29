//importo mongoose despues de instalarlo
import mongoose from "mongoose";
//de mongoose voy a ausar un metodo que se llama connect el cual va a recibir la direccion de mi base de datos esto es una promesa y si todo sale bien uso el .then para verificar si todo va bien entonces me va a entregar un dato y por consola le voy a decir que estoy conectado a la base de datos
//mongoose.connect("xxx").then((dato)=>{ asi estaba primero ahora se remaplaza con la ruta de mi base y en la casilla que dice password remplazo por mi password
    mongoose.connect(process.env.MONGODB_ATLAS_URI).then((dato)=>{
    console.log("bien, conectado a la base de datos");
    //si algo sale mal uso el catch que me muestre el error 
}).catch((error)=>{
    console.log("mal, ocurrió un error y no se conectó a la base de datos");
})
//luego voy a mi index para iniciar la conexion importando este archivo