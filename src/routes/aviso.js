import { Router } from "express";
import { crearAviso, listarAvisos} from "../controllers/aviso.controller";

const router = Router();

router.post('/crear', crearAviso);
router.get('/listar', listarAvisos);


export default router;