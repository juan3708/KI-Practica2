import Rol from "../models/rol";

export async function crearRol (req, res){
    const {nombre} =req.body;
    try{
        let nuevoRol = await Rol.create({
            nombre
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
            attributes: ['id','nombre']
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
    const{id,nombre}= req.body;
    if (id && nombre){
        try {
            let rol= await Rol.findOne({
                where:{id:id},
                attributes:['id','nombre']
            });
            if(rol){
                rol.update ({nombre});
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