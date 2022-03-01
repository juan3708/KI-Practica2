import { Router } from "express";
import { crearNoticia, listarNoticia} from "../controllers/noticia.controller";

const router = Router();

router.post('/crear', crearNoticia);
router.get('/listar', listarNoticia);

export default router;