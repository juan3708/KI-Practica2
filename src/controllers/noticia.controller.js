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
            include:[{
                model: Categoria,
                attributes: ['id']
            }],
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

export async function editarNoticia (req, res){
    const {id, titulo,
        cuerpo,
        estado,
        img,
        } =req.body;
    if(id && titulo && cuerpo && estado && img){
        try{
            let noticia = await Noticia.findOne({
                where: {id:id},
                include:[{
                    model: Categoria,
                    attributes: ['id']
                }],
                attributes: ['id', 'titulo',
                    'cuerpo',
                    'estado',
                    'img']
            });
            if(noticia){
                noticia.update({id, titulo, cuerpo, estado, img});
                res.json ({
                    code:200,
                    message: 'La noticia ha sido editada exitosamente',
                    data:noticia
                });
            }else{
                res.json({
                    code:400,
                    message : 'la noticia no existe'
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

export async function BuscarNoticiasPorCategoria(req, res) {
    const {id} = req.body;
    let Noticias = await Noticia.findAll({
        where: {categoria_id: id },
        include: [{
            model: Categoria,
            attributes: ['nombre']
        }],
        attributes: ['id','titulo',
            'cuerpo',
            'estado', 
            'img']
    });
    res.json({
        code: 200,
        message: 'Se ha listado correctamente',
        data: Noticias
    });
}

export async function BuscarNoticiasPorEstado(req, res) {
    const {estado} = req.body;
    let Noticias = await Noticia.findAll({
        where: {estado:estado},
        attributes: ['id','titulo',
            'cuerpo',
            'estado', 
            'img']
    });
    res.json({
        code: 200,
        message: 'Se ha listado correctamente',
        data: Noticias
    });
}