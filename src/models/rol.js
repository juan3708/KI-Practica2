import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../database/db';

const Rol = sequelize.define ('rol',{
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
    tableName: 'rol'
});

export default Rol;