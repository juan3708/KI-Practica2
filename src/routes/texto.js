import { Router } from "express";
import { crearTexto, listarTexto} from "../controllers/texto.controller";

const router = Router();

router.post('/crear', crearTexto);
router.get('/listar', listarTexto);
//router.put('/editar', editarTecnologia);


export default router;