import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizePerson extends Model<InferAttributes<SequelizePerson>,
InferCreationAttributes<SequelizePerson>> {
  declare id: CreationOptional<number>;

  declare name: string;
}

SequelizePerson.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'persons',
  timestamps: false,
  underscored: true,
});

export default SequelizePerson;
