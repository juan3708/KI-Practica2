import {Router} from 'express';
import {crearPostulante, listarPostulante,eliminarPostulante} from '../controllers/postulante.controller';

const router = Router();

router.post('/crear', crearPostulante);
router.get('/listar', listarPostulante);
router.delete('/eliminar', eliminarPostulante);

export default router;