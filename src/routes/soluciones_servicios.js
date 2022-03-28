import { Router } from "express";
import { crearSoluciones_servicios, listarSoluciones_servicios, editarSoluciones_servicios, 
    eliminarSoluciones_servicios,  BuscarPorTag, BuscarPorId, BuscarPorTipo,
    BuscarPorNombre, BuscarPorTitulo, BuscarPorOperatividad} from "../controllers/soluciones_servicios.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearSoluciones_servicios);
router.get('/listar', listarSoluciones_servicios);
router.put('/editar', auth, editarSoluciones_servicios);
router.delete('/eliminar', auth, eliminarSoluciones_servicios);
router.get('/buscar/id', auth, BuscarPorId);
router.get('/buscar/tipo', auth, BuscarPorTipo);
router.get('/buscar/nombre', auth, BuscarPorNombre);
router.get('/buscar/tag', auth, BuscarPorTag);
router.get('/buscar/titulo', auth, BuscarPorTitulo);
router.get('/buscar/operatividad', auth, BuscarPorOperatividad);

export default router;