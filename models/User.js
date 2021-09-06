const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

//Creates User model with password

class User extends Model {
  
  checkPassword(loginPW) {
      return bcrypt.compareSync(loginPW, this.password);
  }
}

User.init(
{
  
  id: {
      
      type: DataTypes.INTEGER,
     
      allowNull: false,      
      primaryKey: true,      
      autoIncrement: true
  },
  
  username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
  },
  
  password: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {          
       len: { 
            args: [6, 10],
            msg: "The password length should be between 6 and 10 characters."
         }
      }
  }
},
{
  hooks: {
      
      async beforeCreate(newUserData) {
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData;
          
      },
      
      async beforeUpdate(updatedUserData) {
          updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
          return updatedUserData;
      }
  },
 
  sequelize,  
  timestamps: false,  
  freezeTableName: true,  
  underscored: true,  
  modelName: 'user'
}
);

module.exports = User;