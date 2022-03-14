import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Aviso from './aviso';

const Tecnologia = sequelize.define('tecnologia',{
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull:false
    },
    operativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'tecnologia'
});

//Definicion relacion aviso
Tecnologia.belongsToMany (Aviso,{through: "aviso_has_tecnologia"});
Aviso.belongsToMany(Tecnologia,{through: "aviso_has_tecnologia"});

export default Tecnologia;