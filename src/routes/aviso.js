import { Router } from "express";
import { crearAviso, listarAvisos, editarAviso, BuscarAvisosPorEstado, BuscarAvisoPorTitulo, BuscarAvisoPorId, BuscarAvisoPorCargo} from "../controllers/aviso.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearAviso);
router.get('/listar', listarAvisos);
router.put('/editar', auth, editarAviso);
router.get('/buscar/estado', auth, BuscarAvisosPorEstado);
router.get('/buscar/titulo', auth, BuscarAvisoPorTitulo);
router.get('/buscar/id', auth, BuscarAvisoPorId);
router.get('/buscar/cargo', auth, BuscarAvisoPorCargo);

export default router;