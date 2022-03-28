import { Router } from "express";
import { crearRol, listarRol, editarRol, eliminarRol, BuscarRolPorId, BuscarRolPorNombre, BuscarRolPorOperatividad} from "../controllers/rol.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearRol);
router.get('/listar', listarRol);
router.put('/editar', auth, editarRol);
router.delete('/eliminar', auth, eliminarRol);
router.get('/buscar/id', auth, BuscarRolPorId);
router.get('/buscar/nombre', auth, BuscarRolPorNombre);
router.get('/buscar/operatividad', auth, BuscarRolPorOperatividad);

export default router;