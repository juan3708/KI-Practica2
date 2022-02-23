import { Sequelize } from 'sequelize';
import { sequelize } from '../database/db';
import Usuario from './usuario';

const Soluciones_servicios = sequelize.define('soluciones_servicio', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nombre_seccion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tag: {
        type: Sequelize.STRING,
        allowNull: false
    },
    icono: {
        type: Sequelize.STRING,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descripcion: {
        type: Sequelize.STRING,
        allowNull:false
    }   
},{
    timestamps: false,
    tableName: 'soluciones_servicios'
});

//Definicion relacion con usuario

Soluciones_servicios.belongsToMany (Usuario, {through: "soluciones_servicios_has_usuario"});
Usuario.belongsToMany(Soluciones_servicios, {through: "soluciones_servicios_has_usuario"});

export default Soluciones_servicios;