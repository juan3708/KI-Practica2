import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../config/db';
import Categoria from './categoria';


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
    img: {
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

//Definicion relacion con categoria
Noticia.belongsTo(Categoria, {
    foreignKey: {
        name: 'categoria_id',
    },
    sourceKey: 'id'
});
Categoria.hasMany(Noticia, {
    foreignKey: {
        name: 'categoria_id',
    },
    sourceKey: 'id'
});

export default Noticia;
