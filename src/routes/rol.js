import { Router } from "express";
import { crearRol, listarRol, editarRol} from "../controllers/rol.controller";

const router = Router();

router.post('/crear', crearRol);
router.get('/listar', listarRol);
router.put('/editar', editarRol);
//router.delete('/eliminar', eliminarCategoria);

export default router;