import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../config/db';
import Usuario from './usuario';
import Texto from './texto';

const Texto_has_usuario = sequelize.define('texto_has_usuario', {
  texto_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Texto, 
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
    tableName: 'texto_has_usuario'
});

export default Texto_has_usuario;