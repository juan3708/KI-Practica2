import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Usuario from './usuario';
import Rol from './rol';

const Usuario_has_rol = sequelize.define('usuario_has_rol', {
  usuario_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  rol_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Rol,
      key: 'id'
    }
  }
},
{
    timestamps: false,
    tableName: 'usuario_has_rol'
});

export default Usuario_has_rol;
