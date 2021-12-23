module.exports = (sequelize, Sequelize) => {
    const Level = sequelize.define("level", {
      name: {
        type: Sequelize.STRING
      },
      minPoint:{
          type:Sequelize.DataTypes.INTEGER
      },
      maxPoint:{
          type:Sequelize.DataTypes.INTEGER
      },
    }, {
      timestamps: true,
    });
    return Level;
  };