import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Person } from '../../types/Person';

export default {
    up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model<Person>>('persons', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
    },
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('users');
    }
  };