import { Router } from "express";
import { crearAviso, listarAvisos, editarAviso, BuscarAvisosPorEstado, BuscarAvisoPorTitulo, BuscarAvisoPorId, BuscarAvisoPorCargo} from "../controllers/aviso.controller";

const router = Router();

router.post('/crear', crearAviso);
router.get('/listar', listarAvisos);
router.put('/editar', editarAviso);
router.get('/buscar/estado', BuscarAvisosPorEstado);
router.get('/buscar/titulo', BuscarAvisoPorTitulo);
router.get('/buscar/id', BuscarAvisoPorId);
router.get('/buscar/cargo', BuscarAvisoPorCargo);

export default router;