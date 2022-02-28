import Soluciones_servicios from "../models/soluciones_servicios";

export async function crearSoluciones_servicios (req, res){
    const {tipo, nombre_seccion, tag, icono, titulo, descripcion} =req.body;
    try{
        let nuevoTexto = await Texto.create({
            tipo,
            nombre_seccion,
            tag,
            icono,
            titulo, 
            descripcion
        })
        if(nuevoTexto){
            res.json ({
                code: 200,
                message: 'Información creada con exito',
                data: nuevoTexto
            });
        }
    }catch (e){
        res.json({
            code:400,
            message:'Error al crear la información',
            error: e.errors
        });
    }
}

export async function listarSoluciones_servicios (req, res){
    try{
        let textos = await Soluciones_servicios.findAll({
            attributes: ['id', 'tipo', 'nombre_seccion', 'tag', 'icono', 'titulo','descripcion']
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
