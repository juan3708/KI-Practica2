import { Router } from "express";
import { crearSoluciones_servicios, listarSoluciones_servicios, editarSoluciones_servicios, eliminarSoluciones_servicios, 
BuscarPorTag} from "../controllers/soluciones_servicios";

const router = Router();

router.post('/crear', crearSoluciones_servicios);
router.get('/listar', listarSoluciones_servicios);
router.put('/editar', editarSoluciones_servicios);
router.delete('/eliminar', eliminarSoluciones_servicios);
router.get('/buscar/tag', BuscarPorTag);

export default router;