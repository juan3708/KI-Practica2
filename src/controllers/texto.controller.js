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