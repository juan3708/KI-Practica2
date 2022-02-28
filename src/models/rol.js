import {Sequelize} from 'sequelize';
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
},{
    timestamps: false,
    tableName: 'rol'
});

export default Rol;