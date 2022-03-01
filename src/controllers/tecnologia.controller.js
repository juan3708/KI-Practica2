import Tecnologia from "../models/tecnologia";

export async function crearTecnologia (req, res){
    const {nombre, operativo} = req.body;
    try{
        let nuevaTecnologia = await Tecnologia.create({
            nombre, operativo
        })
        if(nuevaTecnologia){
            res.json({
                code:200,
                message: 'Tecnologia creada correctamente',
                data: nuevaTecnologia
            });
        }
    }catch (e) {
        res.json({
            code:400,
            message: 'Error al crear la tecnologia',
            error: e.error
        });
    }
}

export async function listarTecnologia (req, res){
    try{
        let tecnologias = await Tecnologia.findAll ({
            attributes: ['id', 'nombre', 'operativo']
        });
        res.json({
            code:200,
            message: 'Tecnologias listadas con exito',
            tecnologias
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar las tecnologias',
            error: e
        });
    }
}

export async function editarTecnologia (req, res){
    const{id, nombre, operativo } = req.body;
    if(id && nombre && operativo){
        try{
            let tecnologia = await Tecnologia.findOne({
                where:{id:id},
                attributes: ['id' , 'nombre', 'operativo']
            });
            if(tecnologia){
                tecnologia.update({nombre,operativo});
                res.json({
                    code:200,
                    message: 'La tecnologia ha sido editada con exito',
                    data: tecnologia
                });
            }else{
                res.json({
                    code:400,
                    message: 'La tecnologia no existe'
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
            message: 'No ha ingresado campos para editar'
        });
    }
}
export async function eliminarTecnologia (req, res){
    const{id,nombre, operativo} = req.body;
    if(id && nombre && operativo){
        try{
            let tecnologia = await Tecnologia.findOne({
                where: {id:id},
                attributes: ['id']
            });
            if(tecnologia){
                await tecnologia.update({operativo:false});
                res.json ({
                    code:200,
                    message: 'La tecnología ha sido eliminada exitosamente',
                });
            }else{
                res.json({
                    code:400,
                    message : 'La tecnología no existe'
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