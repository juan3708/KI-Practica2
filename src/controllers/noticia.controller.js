import Noticia from "../models/noticia";
import Categoria from "../models/categoria";

export async function crearNoticia (req, res){
    const {titulo, cuerpo, estado, img, categoria_id} =req.body;
    try{
        let nuevaNoticia = await Noticia.create({
            titulo,
            cuerpo,
            estado, 
            img,
            categoria_id,
        })
        if(nuevaNoticia){
            res.json ({
                code: 200,
                message: 'Noticia creada con exito',
                data: nuevaNoticia
            });
        }
    }catch (e){
        res.json({
            code:400,
            message:'Error al crear la noticia',
            error: e.errors
        });
    }
}

export async function listarNoticia(req, res){
    try{
        let noticias = await Noticia.findAll({
            attributes: ['id','titulo','cuerpo','estado', 'img']
        });
        res.json({
            code:200,
            message: 'Noticias listadas con exito',
            noticias
        });
    }catch(e){
        res.json({
            code:400,
            message: 'Error al listar las noticias',
            error: e
        });
    }
}