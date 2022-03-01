import Soluciones_servicios from "../models/soluciones_servicios";

export async function crearSoluciones_servicios(req,res){
    const {tipo, nombre_seccion, tag, icono, titulo, descripcion, operativo} = req.body;
    try{
        let nuevaSoluciones_servicios = await Soluciones_servicios.create({
            tipo,
            nombre_seccion,
            tag,
            icono,
            titulo,
            descripcion,
            operativo
        })
        if(nuevaSoluciones_servicios){
            res.json ({
                code:200,
                message: 'Información creada con exito',
                data: nuevaSoluciones_servicios
            });
        }
    }catch (e){
        res.json({
            code:400,
            message: 'Error al crear la informacion',
            error: e.errors
        });
    }
}

export async function listarSoluciones_servicios (req, res){
    try{
        let soluciones_servicios = await Soluciones_servicios.findAll({
            attributes: ['id', 'tipo', 'nombre_seccion', 'tag', 'icono', 'titulo','descripcion','operativo']
        });
        res.json({
            code:200,
            message: 'Informacion listada con exito',
            soluciones_servicios
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar la informacion',
            error:e
        });
    }
}

export async function editarSoluciones_servicios (req, res){
    const {id, tipo,
        nombre_seccion,
        tag,
        icono,
        titulo, 
        descripcion,
        operativo} =req.body;
    if(id && tipo && nombre_seccion && tag && icono && titulo && descripcion && operativo){
        try{
            let soluciones_servicios = await Soluciones_servicios.findOne({
                where: {id:id},
                attributes: ['id', 'tipo',
                    'nombre_seccion',
                    'tag',
                    'icono',
                    'titulo', 
                    'descripcion',
                    'operativo']
            });
            if(soluciones_servicios){
                soluciones_servicios.update({tipo,nombre_seccion,tag,icono,titulo,descripcion,operativo});
                res.json ({
                    code:200,
                    message: 'La informacion ha sido editada exitosamente',
                    data: soluciones_servicios
                });
            }else{
                res.json({
                    code:400,
                    message : 'la informacion no existe'
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
        })
    }
}

export async function eliminarSoluciones_servicios (req, res){
    const{id, tipo, nombre_seccion, tag, icono, titulo, descripcion, operativo} = req.body;
    if(id && tipo && nombre_seccion && tag && icono && titulo && descripcion && operativo){
        try{
            let soluciones_servicios = await Soluciones_servicios.findOne({
                where: {id:id},
                attributes: ['id']
            });
            if(soluciones_servicios){
                await soluciones_servicios.update({operativo:false});
                res.json ({
                    code:200,
                    message: 'La informacion ha sido eliminada exitosamente',
                });
            }else{
                res.json({
                    code:400,
                    message : 'La informacion no existe'
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
