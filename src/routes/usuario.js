import { Router } from "express";
import { BuscarUsuarioPorApellido, BuscarUsuarioPorCorreo, BuscarUsuarioPorId, BuscarUsuarioPorNombre, 
    crearUsuario, editarUsuario, eliminarUsuario, listarUsuarios, singIn } from "../controllers/usuario.controller";
import auth from "../middlewares/auth";

const router = Router();

router.post('/crear', auth, crearUsuario);
router.get('/listar', auth, listarUsuarios);
router.put('/editar', auth, editarUsuario);
router.delete('/eliminar', auth, eliminarUsuario);
router.get('/buscar/id', auth, BuscarUsuarioPorId);
router.get('/buscar/nombre', auth, BuscarUsuarioPorNombre);
router.get('/buscar/apellido', auth, BuscarUsuarioPorApellido);
router.get('/buscar/correo', auth, BuscarUsuarioPorCorreo);
router.post('/login', singIn);

export default router; 