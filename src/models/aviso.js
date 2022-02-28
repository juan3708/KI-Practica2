import {Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Cargo from './cargo';
import Postulante from './postulante';
import Usuario from './usuario';

const Aviso = sequelize.define('aviso' ,{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    funciones: {
        type: Sequelize.STRING,
        allowNull:false
    },
    rango_inicial: {
        type: Sequelize.STRING,
        allowNull:false
    },
    rango_final: {
        type: Sequelize.STRING,
        allowNull:false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull:false
    },
    cargo_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Cargo,
            key: 'id'
        },
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'aviso'
});

//Definicion relacion con usuario

Aviso.belongsToMany (Usuario, {through: "usuario_has_aviso"});
Usuario.belongsToMany(Aviso, {through: "usuario_has_aviso"});

//Definicion relacion con postulante 

Aviso.hasMany(Postulante, {
    foreignKey: {
        name: 'aviso_id',
    },
    sourceKey: 'id'
});
Postulante.belongsTo(Aviso, {
    foreignKey: {
        name: 'aviso_id',
    },
    sourceKey: 'id'
});

export default Aviso;