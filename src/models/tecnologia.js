import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../config/db';

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

export default Tecnologia;