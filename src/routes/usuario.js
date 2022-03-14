import { Router } from "express";
import { BuscarUsuarioPorApellido, BuscarUsuarioPorCorreo, BuscarUsuarioPorId, BuscarUsuarioPorNombre, 
    crearUsuario, editarUsuario, eliminarUsuario, listarUsuarios } from "../controllers/usuario.controller";

const router = Router();

router.post('/crear', crearUsuario);
router.get('/listar', listarUsuarios);
router.put('/editar', editarUsuario);
router.delete('/eliminar', eliminarUsuario);
router.get('/buscar/id', BuscarUsuarioPorId);
router.get('/buscar/nombre', BuscarUsuarioPorNombre);
router.get('/buscar/apellido', BuscarUsuarioPorApellido);
router.get('/buscar/correo', BuscarUsuarioPorCorreo);

export default router; 