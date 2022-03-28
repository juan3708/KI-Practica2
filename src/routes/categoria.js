import { Router } from "express";
import { crearCategoria, listarCategoria, editarCategoria, eliminarCategoria,
BuscarCategoriaPorId, BuscarCategoriaPorNombre, BuscarCategoriaPorOperatividad} from "../controllers/categoria.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearCategoria);
router.get('/listar', listarCategoria);
router.put('/editar', auth, editarCategoria);
router.delete('/eliminar', auth, eliminarCategoria);
router.get('/buscar/id', auth, BuscarCategoriaPorId);
router.get('/buscar/nombre', auth, BuscarCategoriaPorNombre);
router.get('/buscar/operativo', auth, BuscarCategoriaPorOperatividad);
export default router;