import { Router } from "express";
import { crearCargo, listarCargo, editarCargo, eliminarCargo, BuscarCargoPorId, BuscarCargoPorNombre,
BuscarCargoPorOperatividad} from "../controllers/cargo.controller";

const router = Router();

router.get('/listar', listarCargo);
router.post('/crear', crearCargo);
router.put('/editar', editarCargo);
router.delete('/eliminar', eliminarCargo);
router.get('/buscar/id', BuscarCargoPorId);
router.get('/buscar/nombre', BuscarCargoPorNombre);
router.get('/buscar/operativo', BuscarCargoPorOperatividad);

export default router;