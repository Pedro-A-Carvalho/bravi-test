import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizePerson from './SequelizePerson';

class SequelizeContact extends Model<InferAttributes<SequelizeContact>,
InferCreationAttributes<SequelizeContact>> {
  declare id: CreationOptional<number>;

  declare personId: number;

  declare type: string;

  declare contact: string;

  declare description: string;
}

SequelizeContact.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  personId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('telefone', 'e-mail', 'whatsapp'),
    allowNull: false,
  },
  contact: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'contacts',
  timestamps: false,
  underscored: true,
});

/**
  * `Workaround` para aplicar as associations em TS:
  * Associations 1:N devem ficar em uma das instâncias de modelo
  * */

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });
SequelizeContact.belongsTo(SequelizePerson, { foreignKey: 'personId', as: 'person' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });
SequelizePerson.hasMany(SequelizeContact, { foreignKey: 'personId', as: 'contacts' });

export default SequelizeContact;
