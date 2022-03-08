import Cargo from "../models/cargo";

export async function crearCargo(req,res){
    const {nombre, operativo} = req.body;
    try{
        let nuevoCargo = await Cargo.create({
            nombre,
            operativo
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
            attributes: ['id','nombre','operativo']
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
    const {id, nombre, operativo} =req.body;
    if(id && nombre && operativo){
        try{
            let cargo = await Cargo.findOne({
                where: {id:id},
                attributes: ['id','nombre','operativo']
            });
            if(cargo){
                cargo.update({nombre,operativo});
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
    const{id,nombre, operativo} = req.body;
    if(id && nombre && operativo){
        try{
            let cargo = await Cargo.findOne({
                where: {id:id},
                attributes: ['id']
            });
            if(cargo){
                await cargo.update({operativo:false});
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

export async function BuscarCargoPorId(req, res) {
    const {id} = req.body;
    try{
        let cargo = await Cargo.findOne({
            where: {id:id},
            attributes: ['id', 'nombre', 'operativo' 
            ]
        });
        if(cargo){
            res.json({
                code: 200,
                message: 'Se ha encontrado el cargo',
                data: cargo
            });
        } else {
            res.json({
                code: 400,
                message: 'El cargo con ese id no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarCargoPorNombre(req, res) {
    const {nombre} = req.body;
    try{
        let cargo = await Cargo.findOne({
            where: {nombre:nombre},
            attributes: ['id', 'nombre', 'operativo' 
            ]
        });
        if(cargo){
            res.json({
                code: 200,
                message: 'Se ha encontrado el cargo',
                data: cargo
            });
        } else {
            res.json({
                code: 400,
                message: 'El cargo con ese nombre no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

//FALTA VALIDACIÓN
export async function BuscarCargoPorOperatividad(req, res) {
    const {operativo} = req.body;
    try{
        let cargos = await Cargo.findAll({
            where: {operativo:operativo},
            attributes: ['id','nombre','operativo']
        });
        if(cargos){
            res.json({
                code:200,
                message: 'Los cargos han sido encontrados con exito',
                data : cargos
            });
        }else{
            res.json({
                code:400,
                message: 'Los cargos no existen'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}