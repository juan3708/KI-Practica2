import Aviso from "../models/aviso";
import Cargo from "../models/cargo";
import Tecnologia from "../models/tecnologia";

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
                attributes: ['id', 'nombre', 'operativo']
            },
            {
                model: Tecnologia,
                attributes: ['id', 'nombre']
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

export async function editarAviso (req, res){
    const {id, titulo,
        funciones,
        rango_inicial,
        rango_final,
        estado
        } =req.body;
    if(id && titulo && funciones && rango_inicial && rango_final && estado){
        try{
            let aviso = await Aviso.findOne({
                where: {id:id},
                include:[{
                    model: Cargo,
                    attributes: ['id']
                }],
                attributes: ['id', 'titulo',
                    'funciones',
                    'rango_inicial',
                    'rango_final',
                    'estado']
            });
            if(aviso){
                aviso.update({id, titulo, funciones, rango_inicial, rango_final, estado});
                res.json ({
                    code:200,
                    message: 'El aviso ha sido editado exitosamente',
                    data:aviso
                });
            }else{
                res.json({
                    code:400,
                    message : 'El aviso no existe'
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

export async function BuscarAvisoPorId(req, res) {
    const {id} = req.body;
    try{
        let aviso = await Aviso.findOne({
            where: {id:id},
            attributes: ['id','titulo',
                'funciones',
                'rango_inicial',
                'rango_final',
                'estado', 
            ]
        });
        if(aviso){
            res.json({
                code: 200,
                message: 'Se ha encontrado el aviso',
                data: aviso
            });
        } else {
            res.json({
                code: 400,
                message: 'El aviso con ese id no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarAvisoPorTitulo(req, res) {
    const {titulo} = req.body;
    try{
        let aviso = await Aviso.findOne({
            where: {titulo:titulo},
            attributes: ['id','titulo',
                'funciones',
                'rango_inicial',
                'rango_final',
                'estado', 
            ]
        });
        if(aviso){
            res.json({
                code: 200,
                message: 'Se ha encontrado el aviso',
                data: aviso
            });
        } else {
            res.json({
                code: 400,
                message: 'El aviso no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarAvisosPorEstado(req, res) {
    const {estado} = req.body;
    try{
        let avisos = await Aviso.findAll({
            where: {estado:estado},
            attributes: ['id','titulo',
                'funciones',
                'rango_inicial',
                'rango_final',
                'estado']
        });
        if(avisos.length>0){
            res.json({
                code:200,
                message: 'Los avisos han sido encontrados con exito',
                data : avisos
            });
        }else{
            res.json({
                code:400,
                message: 'El aviso no existe'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarAvisoPorCargo(req, res) {
    const {cargo_id} = req.body;
    try{
    let avisos = await Aviso.findAll({
        where: {cargo_id:cargo_id},
        include: [{
            model: Cargo,
            attributes: ['id','nombre', 'operativo']
        }],
        attributes: ['id', 'titulo',
        'funciones',
        'rango_inicial',
        'rango_final',
        'estado']
        });
        if(avisos.length>0){
            res.json({
                code: 200,
                message: 'Avisos listados correctamente',
                data: avisos
            });
        } else {
            res.json({
                code: 400,
                message: 'No existe el cargo',
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'Error',
        });
    }
}