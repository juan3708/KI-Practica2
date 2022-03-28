import jwt from "jsonwebtoken";
import authConfig from "../config/authConfig";

module.exports = (req, res, next) => {
    console.log(req.headers);
    if(!req.headers.authorization) {
        res.status(401).json({
            msg: 'Acceso no autorizado'
        });
    }else{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (err, decode) => {
            if(err) {
                res.status(500).json({
                    msg: 'Error en verificación del token', 
                    err
                });
            }else{
                console.log(decode);
                next();
            }
        })
    }
}