import { Router } from "express";
import { crearCargo, listarCargo, editarCargo, eliminarCargo, BuscarCargoPorId, BuscarCargoPorNombre,
BuscarCargoPorOperatividad} from "../controllers/cargo.controller";
import auth from "../middlewares/auth";

const router = Router();

router.get('/listar', listarCargo);
router.post('/crear', auth, crearCargo);
router.put('/editar', auth, editarCargo);
router.delete('/eliminar', auth, eliminarCargo);
router.get('/buscar/id', auth, BuscarCargoPorId);
router.get('/buscar/nombre', auth, BuscarCargoPorNombre);
router.get('/buscar/operativo', auth, BuscarCargoPorOperatividad);

export default router;