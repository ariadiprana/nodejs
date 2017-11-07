module.exports = (sequelize, DataType) => {
  const Operators = sequelize.define("Operators", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
       notEmpty: true
      }
    },
    fullname: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
       notEmpty: true
      }
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
     },
     email: {
       type: DataType.STRING,
       unique: true,
       allowNull: false,
       validate: {
         notEmpty: true
       }
      }
    }, {
      classMethods: {
        associate: (models) => {
          Operators.hasMany(models.Tasks);
        }
     }
   });
   return Operators;
};
