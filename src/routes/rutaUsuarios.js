import { Router } from "express";
//importo el controladorusuarios
import ControladorUsuarios from "../controller/controladorUsuarios.js";

const enrutadorUsuarios = Router();

//a cada uno le llamo en su respuesta  con el objeto principal del controlador 
enrutadorUsuarios.post('/', ControladorUsuarios.crearUsuario);
enrutadorUsuarios.get('/:id', ControladorUsuarios.leerUsuario);
enrutadorUsuarios.get('/', ControladorUsuarios.leerUsuarios);
enrutadorUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario);
enrutadorUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario);

export default enrutadorUsuarios;