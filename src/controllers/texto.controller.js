import Texto from "../models/texto";

export async function crearTexto (req, res){
    const {nombre_seccion, tag, titulo, descripcion, operativo} =req.body;
    try{
        let nuevoTexto = await Texto.create({
            nombre_seccion,
            tag,
            titulo, 
            descripcion,
            operativo
        })
        if(nuevoTexto){
            res.json ({
                code: 200,
                message: 'Texto creado con exito',
                data: nuevoTexto
            });
        }
    }catch (e){
        res.json({
            code:400,
            message:'Error al crear el texto',
            error: e.errors
        });
    }
}

export async function listarTexto (req, res){
    try{
        let textos = await Texto.findAll({
            attributes: ['id','nombre_seccion','tag','titulo','descripcion', 'operativo']
        });
        res.json({
            code:200,
            message: 'Informacion listada con exito',
            textos
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar la informacion',
            error:e
        });
    }
}
export async function editarTexto (req, res){
    const{id,nombre_seccion, tag, titulo, descripcion, operativo}= req.body;
    if (id && nombre_seccion && tag && titulo && descripcion && operativo){
        try {
            let texto= await Texto.findOne({
                where:{id:id},
                attributes:['id','nombre_seccion','tag','titulo','descripcion', 'operativo']
            });
            if(texto){
                texto.update ({nombre_seccion,tag,titulo,descripcion,operativo});
                res.json({
                    code:200,
                    message: 'El texto ha sido editado con exito',
                    data: texto
                });
            }else{
                res.json({
                    code:400,
                    message: 'El texto no existe'
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
        });
    }
}

export async function eliminarTexto (req, res){
    const{id, nombre_seccion, tag, titulo, descripcion, operativo} = req.body;
    if(id && nombre_seccion && tag && titulo && descripcion && operativo){
        try{
            let texto = await Texto.findOne({
                where: {id:id},
                attributes: ['id']
            });
            if(texto){
                await texto.update({operativo:false});
                res.json ({
                    code:200,
                    message: 'La informacion ha sido eliminada exitosamente',
                });
            }else{
                res.json({
                    code:400,
                    message : 'La informacion no existe'
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

export async function BuscarTextoPorId(req, res) {
    const {id} = req.body;
    try{
        let texto = await Texto.findOne({
            where: {id:id},
            attributes: ['id','nombre_seccion','tag','titulo','descripcion', 'operativo']
        });
        if(texto){
            res.json({
                code: 200,
                message: 'Se ha encontrado la información',
                data: texto
            });
        } else {
            res.json({
                code: 400,
                message: 'La información con ese id no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarTextoPorNombreSeccion(req, res) {
    const {nombre_seccion} = req.body;
    try{
        let texto = await Texto.findOne({
            where: {nombre_seccion:nombre_seccion},
            attributes: ['id','nombre_seccion','tag','titulo','descripcion', 'operativo']
        });
        if(texto){
            res.json({
                code: 200,
                message: 'Se ha encontrado la información',
                data: texto
            });
        } else {
            res.json({
                code: 400,
                message: 'La información con ese nombre no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarTextoPorTag(req, res) {
    const {tag} = req.body;
    try{
        let textos = await Texto.findAll({
            where: {tag:tag},
            attributes: ['id','nombre_seccion','tag','titulo','descripcion', 'operativo']
        });
        if(textos.length>0){
            res.json({
                code: 200,
                message: 'Se ha encontrado la información',
                data: textos
            });
        } else {
            res.json({
                code: 400,
                message: 'La información con ese tag no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarTextoPorTitulo(req, res) {
    const {titulo} = req.body;
    try{
        let texto = await Texto.findOne({
            where: {titulo:titulo},
            attributes: ['id','nombre_seccion','tag','titulo','descripcion', 'operativo']
        });
        if(texto){
            res.json({
                code: 200,
                message: 'Se ha encontrado la información',
                data: texto
            });
        } else {
            res.json({
                code: 400,
                message: 'La información con ese titulo no existe'
            });
        }
    } catch (e) {
        res.json({
            code: 401,
            message: 'ERROR'
        });
    }
}

export async function BuscarTextoPorOperatividad(req, res) {
    const {operativo} = req.body;
    try{
        let textos = await Texto.findAll({
            where: {operativo:operativo},
            attributes: ['id','nombre_seccion','tag','titulo','descripcion', 'operativo']
        });
        if(textos.length>0){
            res.json({
                code:200,
                message: 'Los textos han sido encontrados con exito',
                data : textos
            });
        }else{
            res.json({
                code:400,
                message: 'Los textos no existen'
            });
        }
    }catch(e){
        res.json({
            code:401,
            message: 'ERROR'
        });
    }
}