//importo el archivo de conexionBD.js luego de instalar mongoose
import "./conexionBD.js";

//primer paso
import servidor from "./servidor.js";
servidor.listen(3000, ()=>{
    console.log("El servidor se esta escuchando en el link http://localhost:3000")
});
