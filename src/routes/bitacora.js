import { Router } from "express";
import { BuscarBitacoraPorAccion, BuscarBitacoraPorFecha, BuscarBitacoraPorId, BuscarBitacoraPorIdTabla, BuscarBitacoraPorTabla, crearBitacora, editarBitacora, listarBitacoras} from "../controllers/bitacora.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearBitacora);
router.get('/listar', listarBitacoras);
router.put('/editar', auth, editarBitacora);
router.get('/buscar/id', auth, BuscarBitacoraPorId);
router.get('/buscar/fecha', auth, BuscarBitacoraPorFecha);
router.get('/buscar/tabla', auth, BuscarBitacoraPorTabla);
router.get('/buscar/accion', auth, BuscarBitacoraPorAccion);
router.get('/buscar/idTabla', auth, BuscarBitacoraPorIdTabla);

export default router;