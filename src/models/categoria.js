import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../config/db';

const Categoria = sequelize.define('categoria',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    operativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'categoria'
});

export default Categoria;