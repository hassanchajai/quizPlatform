
module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question", {
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        point: {
            type: Sequelize.DataTypes.INTEGER
        }
    }, {
        timestamps: true,
    });

    Question.type = Question.belongsTo(require("./questions_types.model")(sequelize, Sequelize))
    Question.type = Question.belongsTo(require("./questions_types.model")(sequelize, Sequelize))
    Question.level = Question.belongsTo(require("./levels.model")(sequelize, Sequelize))
    return Question;
};