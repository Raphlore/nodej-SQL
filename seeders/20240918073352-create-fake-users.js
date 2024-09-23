'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        email: 'johnde@email.com',
        uuid: 'b0e96618-3239-4b84-ab0b-0cc467c7e20f',
        role: 'admin',
        createdAt: '2024-09-18T06:21:26.901Z',
        updatedAt: '2024-09-18T06:21:26.901Z',
      },
    {
      name: 'kush Doe',
      email: 'kushy@email.com',
      uuid: 'b0e96618-4341-4b84-ab0b-0cc488c7e20f',
      role: 'admin',
      createdAt: '2024-09-18T06:21:26.901Z',
      updatedAt: '2024-09-18T06:21:26.901Z',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
