module.exports = (sequelize, Sequelize) => {
    const history = sequelize.define("history_test", {
    }, {
        timestamps: true,
    });
    history.test = history.belongsTo(require("./tests.model")(sequelize,Sequelize))
    history.question = history.belongsTo(require("./question.model")(sequelize,Sequelize))
    history.response = history.belongsTo(require("./reponses.model")(sequelize,Sequelize))
    
    return history;
};