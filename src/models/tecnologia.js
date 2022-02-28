import {Sequelize} from 'sequelize';
import {sequelize} from '../database/db';


const Tecnologia = sequelize.define('tecnologia',{
    id: {
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull:false
    }
},{
    timestamps: false,
    tableName: 'tecnologia'
});

export default Tecnologia;