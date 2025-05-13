import { Express } from "express";

import UsuariosController from "../constrollers/UsuariosController";
import usuarios from "../models/db";

const router = express.router();
router.get('/api/usuarios', (req, res)=>{
    const usuarios = new UsuariosController();
    res.send(usuarios.listar)();
})
router.get('/api/usuarios', (req, res)=>{
    const usuario = new UsuariosController();
    usuarios.adicionar();
    res.send('usuario adicionado com sucesso!');

})

export default router;