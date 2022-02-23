import {Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Noticia from '../models/noticia';

const Categoria = sequelize.define('categoria',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'categoria'
});

//Definicion relacion con noticia

Categoria.hasMany(Noticia, {
    foreignKey: {
        name: 'categoria_id',
    },
    sourceKey: 'id'
});
Noticia.belongsTo(Categoria, {
    foreignKey: {
        name: 'categoria_id',
    },
    sourceKey: 'id'
});

export default Categoria;