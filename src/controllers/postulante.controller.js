import Postulante from "../models/postulante";
import Aviso from "../models/aviso";

export async function crearPostulante (req, res){
    const {nombre,apellido,correo,telefono,direccion,anios_de_experiencia,cv,aviso_id} = req.body;
    try{
        let nuevoPostulante = await Postulante.create({
            nombre,apellido,correo,telefono,direccion,anios_de_experiencia,cv,aviso_id
        })
        if(nuevoPostulante){
            res.json({
                code:200,
                message: 'Postulante creado con exito',
                data: nuevoPostulante
            });
        }
    }catch (e){
        res.json({
            code:400,
            message: 'Error al crear al Postulante',
            error: e.errors
        });
    }
}

export async function listarPostulante (req, res){
    try{
        let Postulantes = await Postulante.findAll({
            include: [{
                model: Aviso,
                attributes:['id']
            }],
            attributes:['id','nombre','apellido','correo','telefono','direccion','anios_de_experiencia','cv']
        });
        res.json({
            code:200,
            message: 'Postulantes listados con exito',
            Postulantes
        });
    }catch (e){
        res.json({
            code:400,
            message: 'Error al listar los postulantes',
            error: e
        });
    }
}

//REVISAR
export async function eliminarPostulante (req, res){
    const{id,nombre,apellido,correo,telefono,direccion,anios_de_experiencia,cv} = req.body;
    if(id && nombre && apellido && correo && telefono && direccion && anios_de_experiencia && cv){
        try{
            let postulante = await Postulante.findOne({
                where:{id:id},
                attributes: ['id' , 'nombre','apellido','correo','telefono','direccion','anios_de_experiencia','cv']
            });
            if(postulante){
                postulante.delete({nombre});
                res.json({
                    code:200,
                    message: 'El postulante se ha eliminado con exito',
                });
            }else{
                res.json({
                    code:400,
                    message: 'El postulante no existe'
                });
            }
        }catch(e){
            res.json({
                code:401,
                message :'Error'
            });
        }
    }else{
        res.json({
            code:203,
            message: 'No ha ingresado campos para eliminar'
        });
    }
}
