import { Router } from "express";
import { crearPostulante, listarPostulante, editarPostulante, eliminarPostulante, BuscarPostulantePorId, BuscarPostulantePorCorreo, 
    BuscarPostulantePorNombre, BuscarPostulantePorApellido, BuscarPostulantePorExperiencia, BuscarPostulantePorOperatividad} from "../controllers/postulante.controller";

const router = Router();

router.post('/crear', crearPostulante);
router.get('/listar', listarPostulante);
router.put('/editar', editarPostulante);
router.delete('/eliminar', eliminarPostulante);
router.get('/buscar/id', BuscarPostulantePorId);
router.get('/buscar/nombre', BuscarPostulantePorNombre);
router.get('/buscar/apellido', BuscarPostulantePorApellido);
router.get('/buscar/correo', BuscarPostulantePorCorreo);
router.get('/buscar/experiencia', BuscarPostulantePorExperiencia);
router.get('/buscar/operatividad', BuscarPostulantePorOperatividad);

export default router;