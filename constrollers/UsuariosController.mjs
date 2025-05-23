import usuarios from "../models/Usuario";
import usuarios from "../models/db";

export default class UsuariosController {
    constructor() {

    }
    listar() {
        const usuarios = new usuario();
        return usuarios.all();
    }

    adcionar() {
        const usuario = new usuario("joão", 70,false);
        usuario.add();
    }
}