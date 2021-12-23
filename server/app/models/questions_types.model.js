module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question_type", {
      name: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: true,
    });
    return Question;
  };