import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../config/db';
import Aviso from '../models/aviso';

const Postulante = sequelize.define('postulante' ,{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull:false
    },
    correo: {
      
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            notNull:{
                message: 'Ingresa un correo'
            },
            isEmail: {
                message: 'Ingresa un correo valido'
            }
        }
    },
    telefono: {
        type: Sequelize.STRING,
        allowNull:false
    },
    direccion: {
        type: Sequelize.STRING,
        allowNull:false
    },
    anios_de_experiencia: {
        type:Sequelize.INTEGER,
        allowNull:false
    },
    cv: {
        type:Sequelize.STRING,
        allowNull:false 
    },
    operativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    aviso_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Aviso,
            key: 'id'
        },
        allowNull: false
    },
},{
    timestamps: false,
    tableName: 'postulante'
});

export default Postulante;