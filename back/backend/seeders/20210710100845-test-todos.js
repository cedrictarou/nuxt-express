'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          id: 1,
          taskName: 'study Vue.js',
          isDone: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          taskName: 'study express.js',
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          taskName: 'study typescript',
          isDone: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
