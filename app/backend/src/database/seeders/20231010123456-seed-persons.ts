import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const persons = [
      { name: 'John Doe'},
      { name: 'Jane Smith'},
      { name: 'Alice Johnson'},
      { name: 'Bob Brown'},
      { name: 'Charlie Davis'},
      { name: 'Diana Evans'},
      { name: 'Ethan Harris'},
      { name: 'Fiona Clark'},
      { name: 'George Lewis'},
      { name: 'Hannah Walker'},
      { name: 'Ian Young'},
      { name: 'Jack King'},
      { name: 'Karen Wright'},
      { name: 'Liam Scott'},
      { name: 'Mia Green'},
      { name: 'Noah Adams'},
      { name: 'Olivia Baker'},
      { name: 'Paul Carter'},
      { name: 'Quinn Mitchell'},
      { name: 'Rachel Perez'},
      { name: 'Samuel Roberts'},
      { name: 'Tina Turner'},
      { name: 'Uma White'},
      { name: 'Victor Hall'},
      { name: 'Wendy Allen'},
      { name: 'Xander Nelson'},
    ];

    await queryInterface.bulkInsert('persons', persons, {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('persons', {});
  }
};