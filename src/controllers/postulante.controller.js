import Postulante from "../models/postulante";
import Aviso from "../models/aviso";


export async function crearPostulante (req, res){
    const {nombre, apellido, correo, telefono, direccion, anios_de_experiencia, cv, operativo, aviso_id} = req.body;
    try{
        let nuevoPostulante = await Postulante.create({
            nombre,
            apellido, 
            correo, 
            telefono,
            direccion,
            anios_de_experiencia,
            cv,
            operativo,
            aviso_id
        })
        if(nuevoPostulante){
            res.json ({
                code: 200,
                message: 'Postulante creado con exito',
                data: nuevoPostulante
            });
        }
    }catch (e){
        res.json({
            code:400,
            message:'Error al crear al Postulante',
            error: e.errors
        });
    }
}

export async function listarPostulante(req, res){
    try{
        let postulantes = await Postulante.findAll({
            include:[{
                model: Aviso,
                attributes: ['id']
            }],
            attributes: ['id',
            'nombre',
            'apellido', 
            'correo', 
            'telefono',
            'direccion',
            'anios_de_experiencia',
            'cv', 
            'operativo']
        });
        res.json({
            code:200,
            message: 'Postulantes listados con exito',
            postulantes
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar los postulantes',
            error: e
        });
    }
}

export async function editarPostulante (req, res){
    const {id, nombre, apellido, correo, telefono, direccion, anios_de_experiencia, cv, operativo} =req.body;
    if(id && nombre && apellido && correo && telefono && direccion && anios_de_experiencia && cv && operativo){
        try{
            let postulante = await Postulante.findOne({
                where: {id:id},
                include:[{
                    model: Aviso,
                    attributes: ['id', 'titulo', 'funciones', 'rango_inicial', 'rango_final', 'estado', 'cargo_id']
                }],
                attributes: ['id',
                    'nombre',
                    'apellido', 
                    'correo', 
                    'telefono',
                    'direccion',
                    'anios_de_experiencia',
                    'cv', 
                    'operativo']
            });
            if(postulante){
                postulante.update({id, nombre, apellido, correo, telefono, direccion, anios_de_experiencia, cv, operativo});
                res.json ({
                    code:200,
                    message: 'El postulante ha sido modificado exitosamente',
                    data:postulante
                });
            }else{
                res.json({
                    code:400,
                    message : 'el postulante no existe'
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

export async function eliminarPostulante (req, res){
    const{id, operativo} = req.body;
    if(id && operativo){
        try{
            let postulante = await Postulante.findOne({
                where: {id:id},
                attributes: ['id']
            });
            if(postulante){
                await postulante.update({operativo:false});
                res.json ({
                    code:200,
                    message: 'El postulante ha sido eliminado exitosamente',
                });
            }else{
                res.json({
                    code:400,
                    message : 'El postulante no existe'
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

export async function BuscarPostulantePorId (req, res) {
    const { id } = req.body;
    try {
        let postulante = await Postulante.findOne({
            where: { id: id },
            include:[{
                model: Aviso,
                attributes: ['id']
            }],
            attributes: ['id',
                'nombre',
                'apellido', 
                'correo', 
                'telefono',
                'direccion',
                'anios_de_experiencia',
                'cv', 
                'operativo']
        });
        if (postulante) {
            res.json({
                code: 200,
                message: 'El postulante ha sido encontrado con exito',
                data: postulante
            });
        } else {
            res.json({
                code: 400,
                message: 'El postulante no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarPostulantePorNombre(req, res) {
    const {nombre} = req.body;
    try{
        let postulantes = await Postulante.findAll({
            where: {nombre:nombre},
            include:[{
                model: Aviso,
                attributes: ['id']
            }],
            attributes: ['id',
                'nombre',
                'apellido', 
                'correo', 
                'telefono',
                'direccion',
                'anios_de_experiencia',
                'cv', 
                'operativo']
        });
        if(postulantes.length>0){
            res.json({
                code:200,
                message: 'Los postulantes han sido encontrados con exito',
                data : postulantes
            });
        }else{
            res.json({
                code:400,
                message: 'No existen postulantes con ese nombre'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarPostulantePorApellido(req, res) {
    const {apellido} = req.body;
    try{
        let postulantes = await Postulante.findAll({
            where: {apellido:apellido},
            include:[{
                model: Aviso,
                attributes: ['id', 'titulo', 'funciones', 'rango_inicial', 'rango_final', 'estado', 'cargo_id']
            }],
            attributes: ['id',
                'nombre',
                'apellido', 
                'correo', 
                'telefono',
                'direccion',
                'anios_de_experiencia',
                'cv', 
                'operativo']
        });
        if(postulantes.length>0){
            res.json({
                code:200,
                message: 'Los postulantes han sido encontrados con exito',
                data : postulantes
            });
        }else{
            res.json({
                code:400,
                message: 'No existen postulantes con ese apellido'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarPostulantePorCorreo (req, res) {
    const {correo} = req.body;
    try {
        let postulante = await Postulante.findOne({
            where: {correo: correo },
            include:[{
                model: Aviso,
                attributes: ['id', 'titulo', 'funciones', 'rango_inicial', 'rango_final', 'estado', 'cargo_id']
            }],
            attributes: ['id',
                'nombre',
                'apellido', 
                'correo', 
                'telefono',
                'direccion',
                'anios_de_experiencia',
                'cv', 
                'operativo']
        });
        if (postulante) {
            res.json({
                code: 200,
                message: 'El postulante ha sido encontrado con exito',
                data: postulante
            });
        } else {
            res.json({
                code: 400,
                message: 'El postulante no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarPostulantePorExperiencia(req, res) {
    const {anios_de_experiencia} = req.body;
    try{
        let postulantes = await Postulante.findAll({
            where: {anios_de_experiencia:anios_de_experiencia},
            include:[{
                model: Aviso,
                attributes: ['id', 'titulo', 'funciones', 'rango_inicial', 'rango_final', 'estado', 'cargo_id']
            }],
            attributes: ['id',
                'nombre',
                'apellido', 
                'correo', 
                'telefono',
                'direccion',
                'anios_de_experiencia',
                'cv', 
                'operativo']
        });
        if(postulantes.length>0){
            res.json({
                code:200,
                message: 'Los postulantes han sido encontrados con exito',
                data : postulantes
            });
        }else{
            res.json({
                code:400,
                message: 'No existen postulantes con esos años de experiencia'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}

export async function BuscarPostulantePorOperatividad(req, res) {
    const {operativo} = req.body;
    try{
        let postulantes = await Postulante.findAll({
            where: {operativo:operativo},
            include:[{
                model: Aviso,
                attributes: ['id', 'titulo', 'funciones', 'rango_inicial', 'rango_final', 'estado', 'cargo_id']
            }],
            attributes: ['id',
            'nombre',
            'apellido', 
            'correo', 
            'telefono',
            'direccion',
            'anios_de_experiencia',
            'cv', 
            'operativo']
        });
        if(postulantes.length>0){
            res.json({
                code:200,
                message: 'Los postulantes han sido encontrados con exito',
                data : postulantes
            });
        }else{
            res.json({
                code:400,
                message: 'Los postulantes no existen'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}


