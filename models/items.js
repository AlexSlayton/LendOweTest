module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    message: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
     },
    },
      {
        // We're saying that we want our Author to have Posts
        classMethods: {
          associate: function(models) {
            // An Author (foreignKey) is required or a Post can't be made
            Item.belongsTo(models.LenderBorrower, {
              as: "lender",
              foreignKey: {
                allowNull: false
              }
            });
            Item.belongsTo(models.LenderBorrower, {
              as: "borrower",
              foreignKey: {
                allowNull: false
              }
            });
          }
        }
      }
    );
  return Item;
};
