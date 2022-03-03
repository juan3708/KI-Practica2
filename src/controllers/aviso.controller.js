import Aviso from "../models/aviso";
import Cargo from "../models/cargo";

export async function crearAviso (req, res){
    const {titulo, funciones, rango_inicial, rango_final, estado, cargo_id} =req.body;
    try{
        let nuevoAviso = await Aviso.create({
            titulo,
            funciones,
            rango_inicial,
            rango_final,
            estado, 
            cargo_id,
        })
        if(nuevoAviso){
            res.json ({
                code: 200,
                message: 'Aviso creado con exito',
                data: nuevoAviso
            });
        }
    }catch (e){
        res.json({
            code:400,
            message:'Error al crear el aviso',
            error: e.errors
        });
    }
}

export async function listarAvisos(req, res){
    try{
        let avisos = await Aviso.findAll({
            include:[{
                model: Cargo,
                attributes: ['id']
            }],
            attributes: ['id','titulo', 'funciones', 'rango_inicial' , 'rango_final', 'estado']
        });
        res.json({
            code:200,
            message: 'Avisos listados con exito',
            avisos
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar los avisos',
            error: e
        });
    }
}