import { Router } from "express";
import { BuscarBitacoraPorAccion, BuscarBitacoraPorFecha, BuscarBitacoraPorId, BuscarBitacoraPorIdTabla, BuscarBitacoraPorTabla, crearBitacora, editarBitacora, listarBitacoras} from "../controllers/bitacora.controller";

const router = Router();

router.post('/crear', crearBitacora);
router.get('/listar', listarBitacoras);
router.put('/editar', editarBitacora);
router.get('/buscar/id', BuscarBitacoraPorId);
router.get('/buscar/fecha', BuscarBitacoraPorFecha);
router.get('/buscar/tabla', BuscarBitacoraPorTabla);
router.get('/buscar/accion', BuscarBitacoraPorAccion);
router.get('/buscar/idTabla', BuscarBitacoraPorIdTabla);

export default router;