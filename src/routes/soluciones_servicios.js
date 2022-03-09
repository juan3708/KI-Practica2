import { Router } from "express";
import { crearSoluciones_servicios, listarSoluciones_servicios, editarSoluciones_servicios, 
    eliminarSoluciones_servicios,  BuscarPorTag, BuscarPorId, BuscarPorTipo,
    BuscarPorNombre, BuscarPorTitulo, BuscarPorOperatividad} from "../controllers/soluciones_servicios.controller";

const router = Router();

router.post('/crear', crearSoluciones_servicios);
router.get('/listar', listarSoluciones_servicios);
router.put('/editar', editarSoluciones_servicios);
router.delete('/eliminar', eliminarSoluciones_servicios);
router.get('/buscar/id', BuscarPorId);
router.get('/buscar/tipo', BuscarPorTipo);
router.get('/buscar/nombre', BuscarPorNombre);
router.get('/buscar/tag', BuscarPorTag);
router.get('/buscar/titulo', BuscarPorTitulo);
router.get('/buscar/operatividad', BuscarPorOperatividad);

export default router;