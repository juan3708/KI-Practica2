import Texto from "../models/texto";

export async function crearTexto (req, res){
    const {nombre_seccion, tag, titulo, descripcion} =req.body;
    try{
        let nuevoTexto = await Texto.create({
            nombre_seccion,
            tag,
            titulo, 
            descripcion
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
            attributes: ['id','nombre_seccion', 'tag','titulo','descripcion']
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
