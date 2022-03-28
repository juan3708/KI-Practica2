import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Noticia from './noticia';
import Aviso from './aviso';
import Texto from './texto';
import Soluciones_servicios from './soluciones_servicios';
import Rol from './rol';
import Usuario_has_rol from './usuario_has_rol';
import Usuario_has_noticia from './usuario_has_noticia';
import Usuario_has_aviso from './usuario_has_aviso';
import Texto_has_usuario from './texto_has_usuario';
import Soluciones_servicios_has_usuario from './soluciones_servicios_has_usuario';


const Usuario = sequelize.define('usuario',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false
    },
    correo: {
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            notNull:{
                message: 'Ingresa un correo'
            },
            isEmail: {
                message: 'Ingresa un correo valido'}
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull:false
    },
    operativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'usuario'
});

//Definicion relacion con Rol
Usuario.belongsToMany(Rol, { through: Usuario_has_rol, foreignKey: {name: 'usuario_id'} });
Rol.belongsToMany(Usuario, { through: Usuario_has_rol, foreignKey: {name: 'rol_id'} });

//Definicion relacion con Noticia
Usuario.belongsToMany(Noticia, { through: Usuario_has_noticia, foreignKey: {name: 'usuario_id'} });
Noticia.belongsToMany(Usuario, { through: Usuario_has_noticia, foreignKey: {name: 'usuario_id'} });

//Definicion relacion con Aviso
Usuario.belongsToMany(Aviso, { through: Usuario_has_aviso, foreignKey: {name: 'usuario_id'} });
Aviso.belongsToMany(Usuario, { through: Usuario_has_aviso, foreignKey: {name: 'aviso_id'} });

//Definicion relacion con Texto
Usuario.belongsToMany(Texto, { through: Texto_has_usuario, foreignKey: {name: 'usuario_id'} });
Texto.belongsToMany (Usuario, { through: Texto_has_usuario, foreignKey: {name: 'texto_id'} });

//Definicion relacion con Soluciones_servicios
Usuario.belongsToMany(Soluciones_servicios, { through: Soluciones_servicios_has_usuario, foreignKey: {name: 'usuario_id'} });
Soluciones_servicios.belongsToMany(Usuario, { through: Soluciones_servicios_has_usuario, foreignKey: {name: 'soluciones_servicios_id'} });

export default Usuario;