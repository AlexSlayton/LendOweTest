module.exports = function(sequelize, DataTypes) {
  var LenderBorrower = sequelize.define("LenderBorrower", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }    
  },
  {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          LenderBorrower.belongsTo(models.User, {
            foreignKey: {
              allowNull: true
            }
          });
        }
      }
    }
    );
  return LenderBorrower;
};
