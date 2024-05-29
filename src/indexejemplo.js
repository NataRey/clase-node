const express = require("express");

const servidor = express();
//primera forma de hacerlo con .end
// servidor.get("/", (peticion, respuesta)=>{
//     respuesta.end(`<!DOCTYPE html>
//     <html lang="es">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <h1>Respuesta desde express</h1>
//     </body>
//     </html>`);
// })
//segunda forma de hacerlo con .send 
// servidor.get("/", (peticion, respuesta)=>{
//     respuesta.send(`<!DOCTYPE html>
//     <html lang="es">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <h1>Respuesta desde express</h1>
//     </body>
//     </html>`);
// })
//tercera forma y la que se va a usar es con .json
servidor.get("/", (peticion, respuesta)=>{
    respuesta.json({
        saludo: "Hola"
    })
});

//si lo envio a otra ruta tengo unos codigos con valor que debo usar 
servidor.get("/rutaCualquiera", (solicitud, respuesta)=>{
    respuesta.redirect(301, "https://bit.institute/");
})
        

//como asignarle el servidor 
servidor.listen(3000);
console.log("El servidor se esta escuchando en el link http://localhost:3000'")
//haver un rest api con express
//Readme
//Contenido Libre
//Pruebas en postman
// mdn http verbs
//mdn http codes

