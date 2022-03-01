import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Aviso from '../models/aviso';

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

//Definicion relacion con aviso

Cargo.hasMany(Aviso,{
    foreignKey:{
        name: 'cargo_id',
    },
    sourceKey: 'id'
})
Aviso.belongsTo (Cargo, {
    foreignKet: {
        name: 'cargo_id',
    },
    sourceKey: 'id'
});

export default Cargo;