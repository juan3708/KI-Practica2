import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../database/db';

const Soluciones_servicios = sequelize.define('soluciones_servicios', {
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
        allowNull: false
    },
    operativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'soluciones_servicios'
});

export default Soluciones_servicios;