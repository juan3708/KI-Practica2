import {Sequelize} from 'sequelize';
import {sequelize} from '../database/db';


const Bitacora = sequelize.define('bitacora' ,{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tabla_referencia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    accion: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fecha: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    id_tabla_referencia: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'bitacora'
});

export default Bitacora;