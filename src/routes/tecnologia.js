import { Router } from "express";
import { crearTecnologia, listarTecnologia, editarTecnologia} from "../controllers/tecnologia.controller";

const router = Router();

router.post('/crear', crearTecnologia);
router.get('/listar', listarTecnologia);
router.put('/editar', editarTecnologia);


export default router;