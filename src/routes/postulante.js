import { Router } from "express";
import { crearPostulante, listarPostulante, editarPostulante, eliminarPostulante, BuscarPostulantePorId, BuscarPostulantePorCorreo, 
    BuscarPostulantePorNombre, BuscarPostulantePorApellido, BuscarPostulantePorExperiencia, BuscarPostulantePorOperatividad} from "../controllers/postulante.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearPostulante);
router.get('/listar', listarPostulante);
router.put('/editar', auth, editarPostulante);
router.delete('/eliminar', auth, eliminarPostulante);
router.get('/buscar/id', auth, BuscarPostulantePorId);
router.get('/buscar/nombre', auth, BuscarPostulantePorNombre);
router.get('/buscar/apellido', auth, BuscarPostulantePorApellido);
router.get('/buscar/correo', auth, BuscarPostulantePorCorreo);
router.get('/buscar/experiencia', auth, BuscarPostulantePorExperiencia);
router.get('/buscar/operatividad', auth, BuscarPostulantePorOperatividad);

export default router;