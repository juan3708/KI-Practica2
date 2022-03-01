import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Usuario from './usuario';

const Texto = sequelize.define('texto' ,{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_seccion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    operativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'texto'
});

//Definicion relacion usuario
Texto.belongsToMany (Usuario,{through: "texto_has_usuario"});
Usuario.belongsToMany(Texto,{through: "texto_has_usuario"});

export default Texto;