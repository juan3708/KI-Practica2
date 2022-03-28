import {Sequelize} from 'sequelize';
import {sequelize} from '../config/db';
import Cargo from './cargo';
import Postulante from './postulante';
import Tecnologia from './tecnologia';

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

//Definicion relacion con Postulante 
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

//Definicion relacion con Cargo
Aviso.belongsTo(Cargo, {
    foreignKey: {
        name: 'cargo_id',
    },
    sourceKey: 'id'
});
Cargo.hasMany(Aviso, {
    foreignKey: {
        name: 'cargo_id',
    },
    sourceKey: 'id'
});

//Definicion relacion con Tecnología
Aviso.belongsToMany(Tecnologia,{through: "aviso_has_tecnologia"});
Tecnologia.belongsToMany (Aviso,{through: "aviso_has_tecnologia"});

export default Aviso;