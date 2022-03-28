import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../config/db';
import Usuario from './usuario';
import Aviso from './aviso';

const Usuario_has_aviso = sequelize.define('usuario_has_aviso', {
  usuario_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Usuario, 
      key: 'id'
    }
  },
  aviso_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Aviso, 
      key: 'id'
    }
  }
},
{
    timestamps: false,
    tableName: 'usuario_has_aviso'
});

export default Usuario_has_aviso;