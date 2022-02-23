import {Router} from 'express';
import {crearCargo, listarCargo,editarCargo,eliminarCargo} from '../controllers/cargo.controller';

const router = Router();

router.post('/crear', crearCargo);
router.get('/listar', listarCargo);
router.post('/editar', editarCargo);
router.delete('/eliminar', eliminarCargo);

export default router;