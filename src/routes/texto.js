import { Router } from "express";
import { crearTexto, listarTexto, editarTexto, eliminarTexto, BuscarTextoPorOperatividad, 
    BuscarTextoPorId, BuscarTextoPorNombreSeccion, BuscarTextoPorTag, BuscarTextoPorTitulo} from "../controllers/texto.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth,  crearTexto);
router.get('/listar', listarTexto);
router.put('/editar', auth, editarTexto);
router.delete('/eliminar', auth, eliminarTexto);
router.get('/buscar/id', auth, BuscarTextoPorId);
router.get('/buscar/nombre', auth, BuscarTextoPorNombreSeccion);
router.get('/buscar/tag', auth, BuscarTextoPorTag);
router.get('/buscar/titulo', auth, BuscarTextoPorTitulo);
router.get('/buscar/operatividad', auth, BuscarTextoPorOperatividad);


export default router;