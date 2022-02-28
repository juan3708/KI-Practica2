import { Router } from "express";
import { crearSoluciones_servicios, listarSoluciones_servicios} from "../controllers/soluciones_servicios";

const router = Router();

router.post('/crear', crearSoluciones_servicios);
router.get('/listar', listarSoluciones_servicios);


export default router;