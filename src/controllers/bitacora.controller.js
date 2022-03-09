import Bitacora from "../models/bitacora"

export async function crearBitacora (req, res){
    const {tabla_referencia, accion, fecha, id_tabla_referencia} =req.body;
    try{
        let nuevaBitacora = await Bitacora.create({
            tabla_referencia,
            accion,
            fecha,
            id_tabla_referencia
        })
        if(nuevaBitacora){
            res.json ({
                code: 200,
                message: 'Bitacora creada con exito',
                data: nuevaBitacora
            });
        }
    }catch (e){
        res.json({
            code:400,
            message:'Error al crear la bitacora',
            error: e.errors
        });
    }
}

export async function listarBitacoras(req, res){
    try{
        let bitacoras = await Bitacora.findAll({
            attributes: ['id', 'tabla_referencia',
            'accion',
            'fecha',
            'id_tabla_referencia']
        });
        res.json({
            code:200,
            message: 'Bitacoras listadas con exito',
            bitacoras
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar las bitacoras ',
            error: e
        });
    }
}

export async function editarBitacora (req, res){
    const {id, 
            tabla_referencia,
            accion,
            fecha,
            id_tabla_referencia} =req.body;
    if(id && tabla_referencia && accion && fecha && id_tabla_referencia ){
        try{
            let bitacora = await Bitacora.findOne({
                where: {id:id},
                attributes: ['id', 'tabla_referencia',
                'accion',
                'fecha',
                'id_tabla_referencia']
            });
            if(bitacora){
                bitacora.update({id, tabla_referencia, accion, fecha, id_tabla_referencia});
                res.json ({
                    code:200,
                    message: 'La bitacora ha sido editada exitosamente',
                    data:bitacora
                });
            }else{
                res.json({
                    code:400,
                    message : 'La bitacora no existe'
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

export async function BuscarBitacoraPorId(req, res) {
    const {id} = req.body;
    try{
        let bitacora = await Bitacora.findOne({
            where: {id:id},
            attributes: ['id', 'tabla_referencia',
            'accion',
            'fecha',
            'id_tabla_referencia']
        });
        if(bitacora){
            res.json({
                code: 200,
                message: 'Se ha encontrado la bitacora',
                data: bitacora
            });
        } else {
            res.json({
                code: 400,
                message: 'La bitacora con ese id no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}


export async function BuscarBitacoraPorTabla(req, res) {
    const {tabla_referencia} = req.body;
    try{
        let bitacoras = await Bitacora.findAll({
            where: {tabla_referencia:tabla_referencia},
            attributes: ['id', 'tabla_referencia',
            'accion',
            'fecha',
            'id_tabla_referencia']
        });
        if(bitacoras.length>0){
            res.json({
                code:200,
                message: 'Las bitacoras han sido encontradas con exito',
                data : bitacoras
            });
        }else{
            res.json({
                code:400,
                message: 'La bitacora no existe'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarBitacoraPorAccion (req, res) {
    const {accion} = req.body;
    try{
        let bitacoras = await Bitacora.findAll({
            where: {accion:accion},
            attributes: ['id', 'tabla_referencia',
            'accion',
            'fecha',
            'id_tabla_referencia']
        });
        if(bitacoras.length>0){
            res.json({
                code:200,
                message: 'Las bitacoras han sido encontradas con exito',
                data : bitacoras
            });
        }else{
            res.json({
                code:400,
                message: 'La bitacora no existe'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarBitacoraPorFecha(req, res) {
    const {fecha} = req.body;
    try{
        let bitacoras = await Bitacora.findAll({
            where: {fecha:fecha},
            attributes: ['id', 'tabla_referencia',
            'accion',
            'fecha',
            'id_tabla_referencia']
        });
        if(bitacoras.length>0){
            res.json({
                code:200,
                message: 'Las bitacoras han sido encontradas con exito',
                data : bitacoras
            });
        }else{
            res.json({
                code:400,
                message: 'La bitacora no existe'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarBitacoraPorIdTabla(req, res) {
    const {id_tabla_referencia} = req.body;
    try{
        let bitacoras = await Bitacora.findAll({
            where: {id_tabla_referencia :id_tabla_referencia},
            attributes: ['id', 'tabla_referencia',
            'accion',
            'fecha',
            'id_tabla_referencia']
        });
        if(bitacoras.length>0){
            res.json({
                code:200,
                message: 'Las bitacoras han sido encontradas con exito',
                data : bitacoras
            });
        }else{
            res.json({
                code:400,
                message: 'La bitacora no existe'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}