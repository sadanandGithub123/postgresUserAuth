'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { 
          len: {
            args: [2,255],
            msg: "Name must be between 2 to 255 characters long."
          }
        },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,     
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: { 
          isEmail: true
        },
      },
      telephone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { 
          is: {
            args: ["^[+]{1}[0-9]{11,14}$"],
            msg: "Must folow valid telephone format"
          }
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};