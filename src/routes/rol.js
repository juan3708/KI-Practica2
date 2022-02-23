import {Router} from 'express';
import {crearRol, listarRol,editarRol} from '../controllers/rol.controller';

const router = Router();

router.post('/crear', crearRol);
router.get('/listar', listarRol);
router.post('/editar', editarRol);

export default router;