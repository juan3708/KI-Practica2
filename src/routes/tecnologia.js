import { Router } from "express";
import { crearTecnologia, listarTecnologia, editarTecnologia, eliminarTecnologia, BuscarTecnologiaPorId, BuscarTecnologiaPorNombre, BuscarTecnologiaPorOperatividad} from "../controllers/tecnologia.controller";

const router = Router();

router.post('/crear', crearTecnologia);
router.get('/listar', listarTecnologia);
router.put('/editar', editarTecnologia);
router.delete('/eliminar', eliminarTecnologia);
router.get('/buscar/id', BuscarTecnologiaPorId);
router.get('/buscar/nombre', BuscarTecnologiaPorNombre);
router.get('/buscar/operatividad', BuscarTecnologiaPorOperatividad);

export default router;