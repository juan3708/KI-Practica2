import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../config/db';

const Cargo = sequelize.define('cargo', {
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
        allowNull:false
    }
},{
    timestamps: false,
    tableName: 'cargo'
});

export default Cargo;