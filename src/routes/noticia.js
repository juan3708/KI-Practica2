import { Router } from "express";
import { crearNoticia, listarNoticia, editarNoticia,BuscarNoticiasPorCategoria, BuscarNoticiasPorEstado, BuscarNoticiaPorTitulo, BuscarNoticiaPorId} from "../controllers/noticia.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearNoticia);
router.get('/listar', listarNoticia);
router.put('/editar', auth, editarNoticia);
router.get('/buscar/categoria', auth, BuscarNoticiasPorCategoria);
router.get('/buscar/estado', auth, BuscarNoticiasPorEstado);
router.get('/buscar/titulo', auth, BuscarNoticiaPorTitulo);
router.get('/buscar/id', auth, BuscarNoticiaPorId);

export default router;