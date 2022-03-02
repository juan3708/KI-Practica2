import { Router } from "express";
import { crearTexto, listarTexto, editarTexto, eliminarTexto} from "../controllers/texto.controller";

const router = Router();

router.post('/crear', crearTexto);
router.get('/listar', listarTexto);
router.put('/editar', editarTexto);
router.delete('/eliminar', eliminarTexto);


export default router;