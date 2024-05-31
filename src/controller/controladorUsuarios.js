//importo el modelo 
import ModeloUsuario from '../model/modeloUsuario.js';
//el controlador lo que hace es controlar las funciones de nuestros metodos
const ControladorUsuarios = {
  //funcion para crear usuarios va a tener como valor lo que habia en rutas
  //le ponemos asincronia para poder esperar las respuestas de mis solicitudes
    crearUsuario: async (solicitud, respuesta) => {
      //creamos las promesas con try/ catch
      try {
        // luego de importar el modelo cambiamos el try
        //comentamos el console.log por que ya comprobamos que los datos estan llegando
        console.log("solicitud body: ", solicitud.body);
        //construir el objeto que esta llegando a la base de datos
        //creo una const 
        const nuevoUsuario =new ModeloUsuario(solicitud.body);
        //creo una nueva constante para que los datos se almacenen en la base de datos
        // luego de probar y validar la promesa modifico la siguiente constante con un await
        const usuarioCreado = await nuevoUsuario.save();
        //creo un console.log solo para ver que el usuario se esta creando
        console.log(usuarioCreado);
        //comento el primer if por que ya no lo necesito
        //if (solicitud.body.nombre === "") throw new Error("falta el nombre");
        if(usuarioCreado._id){
        respuesta.json({
          respuesta: "Bien",
          mensaje: "Usuario creado con el id: ",
          datos: usuarioCreado._id,
        });
      }
        //si se genera un error lo guardo dentro del catch
      } catch (error) {
        //console.log("error: ", error);
        //respuesta.json({error: true, mensaje: "ocurrió un error al crear usuario"});
        respuesta.json({
          resultado: 'mal',
          mensaje: 'ocurrió un error al crear usuario',
          datos: error,
        });
      }
      },
      //funcion leer un usuario
      leerUsuario: async (solicitud, respuesta) => {
        try {
          //creo una constante para leer el usuario encontrado
          const usuarioEncontrado = await ModeloUsuario.findById(
            solicitud.params.id
          );

          //console.log("id: ", solicitud.params.id);
          //respuesta.json({mensaje: "GET leer usuario...works!"});
          if (usuarioEncontrado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'usuario leído',
              datos: usuarioEncontrado,
            });
          }
          //modifico el catch igual
        } catch (error) {
          //console.log("error: ", error);
        //respuesta.json({error: true, mensaje: "ocurrió un error al leer usuario"});
        respuesta.json({
          resultado: 'mal',
          mensaje: 'ocurrió un error al leer usuario',
          datos: error,
        });
        }
      },
      //funcion para leer todod los usuarios
      leerUsuarios: async (solicitud, respuesta) => {
        try {
          //respuesta.json({mensaje: "GET leer todos usuarios... works!"});
          const todosLosUsuarios = await ModeloUsuario.find();
          //pinto la respuesta en formato json
          respuesta.json({
            resultado: 'bien',
            mensaje: 'usuarios leídos',
            datos: todosLosUsuarios,
          });
        } catch (error) {
          //modifico la respuesta del error
          //console.log("error: ", error);
          //respuesta.json({error: true, mensaje: "ocurrió un error al leer todos los usuarios"});
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al leer todos los usuarios',
            datos: error,
          });
        }
      },
      //funcion para actualizar usuarios
      actualizarUsuario: async (solicitud, respuesta) => {
        try {
          //console.log("id: ", solicitud.params.id);
         // console.log("solicitud body: ", solicitud.body);
          //respuesta.json({mensaje: "PUT actualizar usuario...works!"});
          //creo la constante para almacenar los datos actualizados
          const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(
            solicitud.params.id,
            solicitud.body
          );
          //agrego la condicional
          if (usuarioActualizado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'usuario actualizado',
              datos: usuarioActualizado._id,
            });
          }
        } catch (error) {
          //console.log("error: ", error);
          //respuesta.json({error: true, mensaje: "ocurrió un error al actualizar usuario"});
          //modifico el mensaje de error
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al actualizar usuario',
            datos: error,
          });
        }
      },
      //funcion para eliminar usuarios
      eliminarUsuario: async (solicitud, respuesta) => {
        try {
          //console.log("id: ", solicitud.params.id);
          //respuesta.json({mensaje: "DELETE eliminar usuario...works!"});
          //creo una constante  para recibir los datos del usuario que quiero eliminar
          const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(
            solicitud.params.id
          );
          //agrego la condicional
          if (usuarioEliminado._id) {
            respuesta.json({
              resultado: 'bien',
              mensaje: 'usuario eliminado',
              datos: null,
            });
          } 
        } catch (error) {
          // console.log("error: ", error);
          // respuesta.json({error: true, mensaje: "ocurrió un error al eliminar usuario"});
          //modifico la respuesta del catch para mostrar un mejor resultado
          respuesta.json({
            resultado: 'mal',
            mensaje: 'ocurrió un error al eliminar usuario',
            datos: error,
          });
        }
      }
}
//exporto mi objeto que tiene todos los metodos para importarlo en las rutas 
export default ControladorUsuarios;
/*
datos que se pueden pedir para crear un usuario
la sintaxis debe ser asi 
const usuario = {
  "nombre": "pepita",
  "email": "pepita@bit.institute",
  "contrasenia": "asd",
  "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5c15ISCXwz63luQhe_1kNJoAoJ0KwhklcLDCZaAIJn1q-1fvyUBFPIytA_R9SPIUyF4&usqp=CAU",
  "pais": "Colombia"
}
*/