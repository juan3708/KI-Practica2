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
            message: 'Estados Listados Con Exito',
            cargos
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar los estados',
            error: e
        });
    }
}