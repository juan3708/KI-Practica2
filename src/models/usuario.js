import {Sequelize} from 'sequelize';
import {sequelize} from '../database/db';


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
    }
},{
    timestamps: false,
    tableName: 'usuario'
});


export default Usuario;