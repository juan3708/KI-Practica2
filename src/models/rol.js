import {Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Usuario from './usuario';


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

//Definicion relacion usuario

Rol.belongsToMany (Usuario,{through: "usuario_has_rol"});
Usuario.belongsToMany(Rol,{through: "usuario_has_rol"});

export default Rol;
