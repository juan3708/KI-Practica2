import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '../database/db';
import Usuario from './usuario';
import Noticia from './noticia';

const Usuario_has_noticia = sequelize.define('usuario_has_noticia', {
  usuario_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Usuario, 
      key: 'id'
    }
  },
  noticia_id: {
    type: Sequelize.INTEGER,
    references: {
      model: Noticia, 
      key: 'id'
    }
  }
},
{
    timestamps: false,
    tableName: 'usuario_has_noticia'
});

export default Usuario_has_noticia;