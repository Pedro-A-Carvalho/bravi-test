import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Contact } from '../../types/Contact';

export default {
    up(queryInterface: QueryInterface) {
      return queryInterface.createTable<Model<Contact>>('contacts', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        personId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: 'person_id',
          references: {
            model: 'persons',
            key: 'id',
          },
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
      });
    },
    down(queryInterface: QueryInterface) {
      return queryInterface.dropTable('matches');
    }
  };