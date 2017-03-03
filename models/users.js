module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
        len: [6]
        }
      }, 
    });
    // {
  //     // We're saying that we want our Author to have Posts
  //     classMethods: {
  //       associate: function(models) {
  //         // An Author (foreignKey) is required or a Post can't be made
  //         Post.belongsTo(models.Author, {
  //           foreignKey: {
  //             allowNull: false
  //           }
  //         });
  //       }
  //     }
  //   }
  // );
  return User;
};
