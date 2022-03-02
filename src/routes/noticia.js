import { Router } from "express";
import { crearNoticia, listarNoticia, editarNoticia,BuscarNoticiasPorCategoria, BuscarNoticiasPorEstado} from "../controllers/noticia.controller";

const router = Router();

router.post('/crear', crearNoticia);
router.get('/listar', listarNoticia);
router.put('/editar', editarNoticia);
router.get('/buscar/categoria', BuscarNoticiasPorCategoria);
router.get('/buscar/estado', BuscarNoticiasPorEstado);
export default router;