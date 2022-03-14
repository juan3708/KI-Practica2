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
            message: 'Error al listar las categorias',
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

export async function BuscarCategoriaPorId (req, res) {
    const { id } = req.body;
    try {
        let categoria = await Categoria.findOne({
            where: { id: id },
            attributes: ['id','nombre','operativo']
            
        });
        if (categoria) {
            res.json({
                code: 200,
                message: 'La categoría ha sido encontrada con exito',
                data: categoria
            });
        } else {
            res.json({
                code: 400,
                message: 'La categoría no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarCategoriaPorNombre(req, res) {
    const {nombre} = req.body;
    try{
        let categoria = await Cargo.findOne({
            where: {nombre:nombre},
            attributes: ['id', 'nombre', 'operativo'
            ]
        });
        if(categoria){
            res.json({
                code: 200,
                message: 'Se ha encontrado la categoria',
                data: categoria
            });
        } else {
            res.json({
                code: 400,
                message: 'La categoria con ese nombre no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarCategoriaPorOperatividad(req, res) {
    const {operativo} = req.body;
    try{
        let categorias = await Categoria.findAll({
            where: {operativo:operativo},
            attributes: ['id','nombre','operativo']
        });
        if(categorias.length>0){
            res.json({
                code:200,
                message: 'Las categorias han sido encontradas con exito',
                data : cargo
            });
        }else{
            res.json({
                code:400,
                message: 'Las categorias no existen'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}