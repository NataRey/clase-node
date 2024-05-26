"use strict";
//llamo a express
const express = require("express");
//le creo un servidor 
const servidor = express();
// el servidor va a recibir cin el metodo get un elemento que llamamos con elemento raiz, luego de esto creamos una peticiono solicitud y nos debe traer una respuesta
// servidor.get('/',(peticion, respuesta)=>{
//     // aqui llamo a la respuesta y la devuelvo con un etodo llamado end para devolver en este cado una pagina html
//     respuesta.end(`
//     <!DOCTYPE html>
// <html lang="es">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Express</title>
// </head>
// <body>
//     <h1>
//     Hola desde express!
//     </h1>
// </body>
// </html>
//     `)
// });
//es mejor utiliozar send si boy a usar html 
 //servidor.get('/',(peticion, respuesta)=>{
     // aqui llamo a la respuesta y la devuelvo con un etodo llamado send para devolver en este cado una pagina html
//      respuesta.send(`
//      <!DOCTYPE html>
//  <html lang="es">
//  <head>
//      <meta charset="UTF-8">
//      <meta name="viewport" content="width=device-width, initial-scale=1.0">
//      <title>Express</title>
//  </head>
//  <body>
//      <h1>
//      Hola desde express!
//      </h1>
// </body>
// </html>
//     `)
// });
//y apara las apis se usa Json
servidor.get("/",(solicitud,respuesta)=>{
    respuesta.json({
        saludo: "Hola"
    })
});

//ahora tengo que encender mi servidor como lo hago 
//llamo al servidor y le digo que escuche el puerto 3000

/*Otra forma de hacerlo es con el metodo redirect cuando yo tengo un servidor y le digo con el codigo de respuesta en este caso 301 que me lo redirija a la raiz cuando el usuario llame a esa ruta el se dirija directamente a la carpeta raiz / en este caso al saludo Hola*/
servidor.get("/ruta", (solicitud, respuesta)=>{
    respuesta.redirect(301,"/");
});

/**Instalar express
 * probar con postman ruta raiz con respuesta en J.son*/

servidor.listen(3000);

console.log("El servidor se esta escuchando en el link http://localhost:3000");
