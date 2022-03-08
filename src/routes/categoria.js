import { Router } from "express";
import { crearCategoria, listarCategoria, editarCategoria, eliminarCategoria,
BuscarCategoriaPorId, BuscarCategoriaPorNombre, BuscarCategoriaPorOperatividad} from "../controllers/categoria.controller";

const router = Router();

router.post('/crear', crearCategoria);
router.get('/listar', listarCategoria);
router.put('/editar', editarCategoria);
router.delete('/eliminar', eliminarCategoria);
router.get('/buscar/id', BuscarCategoriaPorId);
router.get('/buscar/nombre', BuscarCategoriaPorNombre);
router.get('/buscar/operativo', BuscarCategoriaPorOperatividad);
export default router;