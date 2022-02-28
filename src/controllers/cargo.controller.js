import Cargo from "../models/cargo";

export async function crearCargo(req,res){
    const {nombre} = req.body;
    try{
        let nuevoCargo = await Cargo.create({
            nombre
        })
        if(nuevoCargo){
            res.json ({
                code:200,
                message: 'Cargo creado con exito',
                data: nuevoCargo
            });
        }
    }catch (e){
        res.json({
            code:400,
            message: 'Error al crear el cargo',
            error: e.errors
        });
    }
}

export async function listarCargo(req, res){
    try{
        let cargos = await Cargo.findAll({
             attributes: ['id','nombre']
        });
        res.json({
            code:200,
            message: 'Cargos listados Con Exito',
            cargos
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar los cargos',
            error: e
        });
    }
}

export async function editarCargo (req, res){
    const {id, nombre} =req.body;
    if(id && nombre){
        try{
            let cargo = await Cargo.findOne({
                where: {id:id},
                attributes: ['id','nombre']
            });
            if(cargo){
                cargo.update({nombre});
                res.json ({
                    code:200,
                    message: 'El cargo ha sido editado exitosamente',
                    data: cargo
                });
            }else{
                res.json({
                    code:400,
                    message : 'El cargo no existe'
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

export async function eliminarCargo (req, res){
    const{id,nombre} = req.body;
    if(id && nombre){
        try{
            let cargo = await Cargo.findOne({
                where: {id:id},
                attributes: ['id','nombre']
            });
            if(cargo){
                cargo.destroy({nombre});
                res.json ({
                    code:200,
                    message: 'El cargo ha sido eliminado exitosamente',
                });
            }else{
                res.json({
                    code:400,
                    message : 'El cargo no existe'
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