import { Router } from "express";
import { crearCargo, listarCargo } from "../controllers/cargo.controller";

const router = Router();

router.get('/listar', listarCargo);
router.post('/crear', crearCargo);

export default router;