import {Sequelize} from 'sequelize';
import sequelize, {Sequelize} from '../database/db';
import Categoria from './categoria';
import Usuario from './usuario';


const Noticia = sequelize.define('noticia' ,{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuerpo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagen: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Categoria,
            key: 'id'
        },
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'noticia'
});

//Definicion relacion con usuario

Noticia.belongsToMany (Usuario, {through: "usuario_has_noticia"});
Usuario.belongsToMany(Noticia, {through: "usuario_has_noticia"});

export default Noticia;