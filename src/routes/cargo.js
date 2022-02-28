import { Router } from "express";
import { crearCargo, listarCargo, editarCargo, eliminarCargo} from "../controllers/cargo.controller";

const router = Router();

router.get('/listar', listarCargo);
router.post('/crear', crearCargo);
router.put('/editar', editarCargo);
router.delete('/eliminar', eliminarCargo);

export default router;