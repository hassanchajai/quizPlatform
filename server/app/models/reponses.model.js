module.exports = (sequelize, Sequelize) => {
    const Reponse = sequelize.define("reponse", {
      content: {
        type: Sequelize.STRING
      },
      correct:{
          type:Sequelize.DataTypes.BOOLEAN
      }
    }, {
      timestamps: true,
    });
    Reponse.question=Reponse.belongsTo(require("./question.model")(sequelize,Sequelize))
    return Reponse;
  };