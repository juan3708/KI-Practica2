import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../config/db';
import Usuario from './usuario';
import Soluciones_servicios from './soluciones_servicios';

const Soluciones_servicios_has_usuario = sequelize.define('soluciones_servicios_has_usuario', {
  soluciones_servicios_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Soluciones_servicios, 
      key: 'id'
    }
  },
  usuario_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Usuario, 
      key: 'id'
    }
  }
},
{
    timestamps: false,
    tableName: 'soluciones_servicios_has_usuario'
});

export default Soluciones_servicios_has_usuario;