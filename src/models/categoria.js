import {Sequelize} from 'sequelize';
import {sequelize} from '../database/db';

const Categoria = sequelize.define('categoria',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'categoria'
});

export default Categoria;