import Rol from "../models/rol";

export async function crearRol (req, res){
    const {nombre, operativo} =req.body;
    try{
        let nuevoRol = await Rol.create({
            nombre,
            operativo
        })
        if(nuevoRol){
            res.json ({
                code: 200,
                message: 'Rol creado con exito',
                data: nuevoRol
            });
        }
    }catch (e){
        res.json({
            code:400,
            message:'Error al crear el rol',
            error: e.errors
        });
    }
}

export async function listarRol (req, res){
    try{
        let roles = await Rol.findAll({
            attributes: ['id','nombre','operativo']
        });
        res.json({
            code:200,
            message: 'Roles listados con exito',
            roles
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar los roles',
            error:e
        });
    }
}
export async function editarRol (req, res){
    const{id,nombre,operativo}= req.body;
    if (id && nombre && operativo){
        try {
            let rol= await Rol.findOne({
                where:{id:id},
                attributes:['id','nombre', 'operativo']
            });
            if(rol){
                rol.update ({nombre,operativo});
                res.json({
                    code:200,
                    message: 'El rol ha sido editado con exito',
                    data: rol
                });
            }else{
                res.json({
                    code:400,
                    message: 'El rol no existe'
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

export async function eliminarRol (req, res){
    const{id,nombre, operativo} = req.body;
    if(id && nombre && operativo){
        try{
            let rol = await Rol.findOne({
                where: {id:id},
                attributes: ['id']
            });
            if(rol){
                await rol.update({operativo:false});
                res.json ({
                    code:200,
                    message: 'El rol ha sido eliminado exitosamente',
                });
            }else{
                res.json({
                    code:400,
                    message : 'El rol no existe'
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

export async function BuscarRolPorId(req, res) {
    const {id} = req.body;
    try{
        let rol = await Rol.findOne({
            where: {id:id},
            attributes: ['id', 'nombre', 'operativo']
        });
        if(rol){
            res.json({
                code: 200,
                message: 'Se ha encontrado el rol',
                data: rol
            });
        } else {
            res.json({
                code: 400,
                message: 'El rol con ese id no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarRolPorNombre(req, res) {
    const {nombre} = req.body;
    try{
        let rol = await Rol.findOne({
            where: {nombre:nombre},
            attributes: ['id', 'nombre', 'operativo']
        });
        if(rol){
            res.json({
                code: 200,
                message: 'Se ha encontrado el rol',
                data: rol
            });
        } else {
            res.json({
                code: 400,
                message: 'El rol con ese nombre no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarRolPorOperatividad(req, res) {
    const {operativo} = req.body;
    try{
        let roles = await Rol.findAll({
            where: {operativo:operativo},
            attributes: ['id','nombre','operativo']
        });
        if(roles.length>0){
            res.json({
                code:200,
                message: 'Los roles han sido encontrados con exito',
                data : roles
            });
        }else{
            res.json({
                code:400,
                message: 'Los roles no existen'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}