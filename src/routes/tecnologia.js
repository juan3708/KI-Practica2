import { Router } from "express";
import { crearTecnologia, listarTecnologia, editarTecnologia, eliminarTecnologia} from "../controllers/tecnologia.controller";

const router = Router();

router.post('/crear', crearTecnologia);
router.get('/listar', listarTecnologia);
router.put('/editar', editarTecnologia);
router.delete('/eliminar', eliminarTecnologia);


export default router;