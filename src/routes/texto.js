import { Router } from "express";
import { crearTexto, listarTexto, editarTexto, eliminarTexto, BuscarTextoPorOperatividad, 
    BuscarTextoPorId, BuscarTextoPorNombreSeccion, BuscarTextoPorTag, BuscarTextoPorTitulo} from "../controllers/texto.controller";

const router = Router();

router.post('/crear', crearTexto);
router.get('/listar', listarTexto);
router.put('/editar', editarTexto);
router.delete('/eliminar', eliminarTexto);
router.get('/buscar/id', BuscarTextoPorId);
router.get('/buscar/nombre', BuscarTextoPorNombreSeccion);
router.get('/buscar/tag', BuscarTextoPorTag);
router.get('/buscar/titulo', BuscarTextoPorTitulo);
router.get('/buscar/operatividad', BuscarTextoPorOperatividad);


export default router;