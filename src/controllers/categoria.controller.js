import Categoria from "../models/categoria";

export async function crearCategoria(req,res){
    const {nombre, operativo} = req.body;
    try{
        let nuevaCategoria = await Categoria.create({
            nombre,
            operativo
        })
        if(nuevaCategoria){
            res.json ({
                code:200,
                message: 'Categoria creada con exito',
                data: nuevaCategoria
            });
        }
    }catch (e){
        res.json({
            code:400,
            message: 'Error al crear la categoria',
            error: e.errors
        });
    }
}

export async function listarCategoria(req, res){
    try{
        let categorias = await Categoria.findAll({
            attributes: ['id','nombre','operativo']
        });
        res.json({
            code:200,
            message: 'Categorias listadas con exito',
            categorias
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar los categorias',
            error: e
        });
    }
}

export async function editarCategoria (req, res){
    const {id, nombre, operativo} =req.body;
    if(id && nombre && operativo){
        try{
            let categoria = await Categoria.findOne({
                where: {id:id},
                attributes: ['id','nombre','operativo']
            });
            if(categoria){
                categoria.update({nombre,operativo});
                res.json ({
                    code:200,
                    message: 'La categoria ha sido editada exitosamente',
                    data: categoria
                });
            }else{
                res.json({
                    code:400,
                    message : 'la categoria no existe'
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

export async function eliminarCategoria (req, res){
    const{id,nombre, operativo} = req.body;
    if(id && nombre && operativo){
        try{
            let categoria = await Categoria.findOne({
                where: {id:id},
                attributes: ['id']
            });
            if(categoria){
                await categoria.update({operativo:false});
                res.json ({
                    code:200,
                    message: 'La categoria ha sido eliminada exitosamente',
                });
            }else{
                res.json({
                    code:400,
                    message : 'La categoria no existe'
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
