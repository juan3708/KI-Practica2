import { Router } from "express";
import { crearTexto, listarTexto,editarTexto} from "../controllers/texto.controller";

const router = Router();

router.post('/crear', crearTexto);
router.get('/listar', listarTexto);
router.put('/editar', editarTexto);


export default router;