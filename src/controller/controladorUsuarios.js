//el controlador lo que hace es controlar las funciones de nuestros metodos
const ControladorUsuarios = {
  //funcion para crear usuarios va a tener como valor lo que habia en rutas
  //le ponemos asincronia para poder esperar las respuestas de mis solicitudes
    crearUsuario: async (solicitud, respuesta) => {
      //creamos las promesas con try/ catch
      try {
        console.log("solicitud body: ", solicitud.body);
        if (solicitud.body.nombre === "") throw new Error("falta el nombre");
        respuesta.json({mensaje: "POST crear usuario...works!"});
        //si se genera un error lo guardo dentro del catch
      } catch (error) {
        console.log("error: ", error);
        respuesta.json({error: true, mensaje: "ocurrió un error al crear usuario"});
      }
      },
      //funcion leer un uusario
      leerUsuario: async (solicitud, respuesta) => {
        try {
          console.log("id: ", solicitud.params.id);
          respuesta.json({mensaje: "GET leer usuario...works!"});
        } catch (error) {
          console.log("error: ", error);
        respuesta.json({error: true, mensaje: "ocurrió un error al leer usuario"});
        }
      },
      //funcion para leer todod los usuarios
      leerUsuarios: async (solicitud, respuesta) => {
        try {
          respuesta.json({mensaje: "GET leer todos usuarios... works!"});
        } catch (error) {
          console.log("error: ", error);
          respuesta.json({error: true, mensaje: "ocurrió un error al leer todos los usuarios"});
        }
      },
      //funcion para actualizar usuarios
      actualizarUsuario: async (solicitud, respuesta) => {
        try {
          console.log("id: ", solicitud.params.id);
          console.log("solicitud body: ", solicitud.body);
          respuesta.json({mensaje: "PUT actualizar usuario...works!"});
        } catch (error) {
          console.log("error: ", error);
          respuesta.json({error: true, mensaje: "ocurrió un error al actualizar usuario"});
        }
      },
      //funcion para eliminar usuarios
      eliminarUsuario: async (solicitud, respuesta) => {
        try {
          console.log("id: ", solicitud.params.id);
          respuesta.json({mensaje: "DELETE eliminar usuario...works!"});
        } catch (error) {
          console.log("error: ", error);
          respuesta.json({error: true, mensaje: "ocurrió un error al eliminar usuario"});
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