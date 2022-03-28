import Usuario from "../models/usuario";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Rol from "../models/rol";

const saltRound = 10;
const secret = 'kiteknology2022';
const expires = '24h';
export async function crearUsuario(req, res){
    const {nombre, apellido, correo, password, operativo, roles} = req.body;
    console.log(roles);
    try{
        //encriptacion de contraseña.
        let passwordEncrypt = bcrypt.hashSync(password, saltRound);
        let nuevoUsuario = await Usuario.create({
            nombre,
            apellido,
            correo,
            password: passwordEncrypt,
            operativo
        })
        if(nuevoUsuario){ //asigna uno o varios roles al usuario
            for (let i = 0; i < roles.length; i++) {
                let roldb= await Rol.findOne({
                    where:{id:roles[i]}
                });
                nuevoUsuario.addRol(roldb);
            }
            let token = jwt.sign({nuevoUsuario}, secret, {expiresIn:expires});
            res.json({
                code:200,
                message: 'Usuario Creado Con Exito',
                data : nuevoUsuario, 
                token
            });
        }
    }catch(e){
        console.log(e);
        res.json({
            code:400,
            message: 'Error al crear al usuario',
            error: e.errors
        });
    }
}

export async function listarUsuarios (req, res){
    try{
        let usuarios = await Usuario.findAll({
            include:{
                model: Rol,
                through: { 
                   attributes: []
                }
            },
            attributes: ['id', 'nombre',
            'apellido',
            'correo',
            'password',
            'operativo']
        });
        res.json({
            code:200,
            message: 'Usuarios listados con exito',
            usuarios
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar los usuarios',
            error:e
        });
    }
}

export async function editarUsuario (req, res){
    const{id, nombre, apellido,
        correo,
        password,
        operativo}= req.body;
    if (id && nombre && apellido && correo && password && operativo){
        try {
            let usuario= await Usuario.findOne({
                where:{id:id},
                attributes:['id', 'nombre',
                'apellido',
                'correo',
                'password',
                'operativo']
            });
            if(usuario){
                usuario.update ({id, nombre, apellido,
                    correo,
                    password,
                    operativo});
                res.json({
                    code:200,
                    message: 'El usuario ha sido editado con exito',
                    data: usuario
                });
            }else{
                res.json({
                    code:400,
                    message: 'El usuario no existe'
                });
            }
        }catch(e){
            res.json({
                code:401,
                message: 'ERROR'
            });
        }
    }else{
        res.json({
            code:203,
            message: 'No ha ingresado campos para editar'
        });
    }
}

export async function eliminarUsuario (req, res){
    const{id,
        operativo} = req.body;
    if(id && operativo){
        try{
            let usuario = await Usuario.findOne({
                where: {id:id},
                attributes: ['id']
            });
            if(usuario){
                await usuario.update({operativo:false});
                res.json ({
                    code:200,
                    message: 'El usuario ha sido eliminado exitosamente',
                });
            }else{
                res.json({
                    code:400,
                    message : 'El usuario no existe'
                });
            }
        }catch(e){
            res.json({
                code:401,
                message: 'ERROR'
            });
        }
    }else{
        res.json({
            code:203,
            message: 'No ha ingresado campos para eliminar'
        });
    }
}

export async function BuscarUsuarioPorId (req, res) {
    const { id } = req.body;
    try {
        let usuario = await Usuario.findOne({
            where: { id: id },
            attributes:['id', 'nombre',
                'apellido',
                'correo',
                'password',
                'operativo']
        });
        if (usuario) {
            res.json({
                code: 200,
                message: 'El usuario ha sido encontrado con exito',
                data: usuario
            });
        } else {
            res.json({
                code: 400,
                message: 'El usuario con ese id no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarUsuarioPorNombre(req, res) {
    const {nombre} = req.body;
    try{
        let usuarios = await Usuario.findAll({
            where: {nombre:nombre},
            attributes:['id', 'nombre',
                'apellido',
                'correo',
                'password',
                'operativo']
        });
        if(usuarios.length>0){
            res.json({
                code:200,
                message: 'Los usuarios han sido encontrados con exito',
                data : usuarios
            });
        }else{
            res.json({
                code:400,
                message: 'No existen usuarios con ese nombre'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarUsuarioPorApellido(req, res) {
    const {apellido} = req.body;
    try{
        let usuarios = await Usuario.findAll({
            where: {apellido:apellido},
            attributes:['id', 'nombre',
                'apellido',
                'correo',
                'password',
                'operativo']
        });
        if(usuarios.length>0){
            res.json({
                code:200,
                message: 'Los usuarios han sido encontrados con exito',
                data : usuarios
            });
        }else{
            res.json({
                code:400,
                message: 'No existen usuarios con ese apellido'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarUsuarioPorCorreo (req, res) {
    const {correo} = req.body;
    try {
        let usuario = await Usuario.findOne({
            where: {correo:correo},
            attributes:['id', 'nombre',
                'apellido',
                'correo',
                'password',
                'operativo']
        });
        if (usuario) {
            res.json({
                code: 200,
                message: 'El usuario ha sido encontrado con exito',
                data: usuario
            });
        } else {
            res.json({
                code: 400,
                message: 'No existe un usuario asociado a ese correo'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function singIn (req, res) {
    const {correo, password} = req.body;
    try {
        let usuario = await Usuario.findOne({
            where: {correo},
            attributes:['id', 'nombre',
                'apellido',
                'correo',
                'password',
                'operativo']
        });
        if (usuario) {
            if (bcrypt.compareSync(password, usuario.password)){
                let token = jwt.sign({usuario}, secret, {expiresIn:expires});
                res.json({
                    code: 200,
                    message: 'Ha ingresado con exito',
                    data: usuario,
                    token
                });
            }else{
                res.json({
                    code: 401,
                    message: 'La contraseña ingresada es incorrecta'
                });
            }
        } else {
            res.json({
                code: 400,
                message: 'Por favor revise los datos ingresados'
            });
        }
    } catch (e) {
        console.log(e);
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}