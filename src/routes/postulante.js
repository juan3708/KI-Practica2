import { Router } from "express";
import { crearPostulante, listarPostulante, editarPostulante, eliminarPostulante, BuscarPostulantePorId, BuscarPostulantePorCorreo} from "../controllers/postulante.controller";

const router = Router();

router.post('/crear', crearPostulante);
router.get('/listar', listarPostulante);
router.put('/editar', editarPostulante);
router.delete('/eliminar', eliminarPostulante);
router.get('/buscar/id', BuscarPostulantePorId);
router.get('/buscar/correo', BuscarPostulantePorCorreo);

export default router;