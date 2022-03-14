import { Router } from "express";
import { crearRol, listarRol, editarRol, eliminarRol, BuscarRolPorId, BuscarRolPorNombre, BuscarRolPorOperatividad} from "../controllers/rol.controller";

const router = Router();

router.post('/crear', crearRol);
router.get('/listar', listarRol);
router.put('/editar', editarRol);
router.delete('/eliminar', eliminarRol);
router.get('/buscar/id', BuscarRolPorId);
router.get('/buscar/nombre', BuscarRolPorNombre);
router.get('/buscar/operatividad', BuscarRolPorOperatividad);

export default router;