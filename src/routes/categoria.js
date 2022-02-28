import { Router } from "express";
import { crearCategoria, listarCategoria, editarCategoria, eliminarCategoria} from "../controllers/categoria.controller";

const router = Router();

router.post('/crear', crearCategoria);
router.get('/listar', listarCategoria);
router.put('/editar', editarCategoria);
router.delete('/eliminar', eliminarCategoria);

export default router;