import { Router } from "express";
import { crearTecnologia, listarTecnologia, editarTecnologia, eliminarTecnologia, BuscarTecnologiaPorId, BuscarTecnologiaPorNombre, BuscarTecnologiaPorOperatividad} from "../controllers/tecnologia.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearTecnologia);
router.get('/listar', listarTecnologia);
router.put('/editar', auth, editarTecnologia);
router.delete('/eliminar', auth, eliminarTecnologia);
router.get('/buscar/id', auth, BuscarTecnologiaPorId);
router.get('/buscar/nombre', auth, BuscarTecnologiaPorNombre);
router.get('/buscar/operatividad', auth, BuscarTecnologiaPorOperatividad);

export default router;