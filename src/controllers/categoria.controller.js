import Categoria from "../models/categoria";

export async function crearCategoria (req, res){
    const {nombre} = req.body;
    try{
        let nuevaCategoria = await Categoria.create({
            nombre
        })
        if(nuevaCategoria){
            res.json({
                code:200,
                message: 'Categoria creada con exito',
                data : nuevaCategoria
            });
        }
    }catch(e){
        res.json({
            code:400,
            message: 'Error al crear la categoria',
            error: e.errors
        });
    }
}

export async function listarCategoria (req, res){
    try{
        let categorias = await Categoria.findAll({
            attributes: ['id' , 'nombre']
        });
        res.json({
            code:200,
            message: 'Categorias listadas con exito',
            categorias
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar las categorias',
            error: e
        });
    }
}

export async function editarCategoria (req, res){
    const{id,nombre} = req.body;
    if(id && nombre){
        try{
            let categoria = await Categoria.findOne({
                where:{id:id},
                attributes: ['id' , 'nombre']
            });
            if(categoria){
                categoria.update({nombre});
                res.json({
                    code:200,
                    message: 'La categoria ha sido editada con exito',
                    data: categoria
                });
            }else{
                res.json({
                    code:400,
                    message: 'La categoria no existe'
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


//REVISAR
export async function eliminarCategoria (req, res){
    const{id,nombre} = req.body;
    if(id && nombre){
        try{
            let categoria = await Categoria.findOne({
                where:{id:id},
                attributes: ['id' , 'nombre']
            });
            if(categoria){
                categoria.delete({nombre});
                res.json({
                    code:200,
                    message: 'La categoria se ha eliminado con exito',
                });
            }else{
                res.json({
                    code:400,
                    message: 'La categoria no existe'
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