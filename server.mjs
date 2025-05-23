import { Express } from "express";
import cors from "cors";
import UsuariosRoutes from './routes/UsuarioRoutes'

export default class server {
    constructor() {
        this.server = Express; 
    }

    run(port) {
        this.middlewares();
        //THIS.ROUTES();
        this.server.listen(port, () => {
            console.log('Server listen on port ${port}');
        }) 

    }

     middlewares() {
        this.server.use(Express.json());
        this.server.use(cors());
        this.server.use(UsuariosRoutes());
    }
}