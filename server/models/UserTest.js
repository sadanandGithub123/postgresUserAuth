'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserTest = sequelize.define('UserTest', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        len: {
          args: [2,255],
          msg: "Name must be between 2 to 255 characters long."
        }
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { 
        isEmail: true
      },
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { 
        is: {
          args: ["^[+]{1}[0-9]{11,14}$"],
          msg: "Must folow valid telephone format"
        }
      },
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserTest;
};