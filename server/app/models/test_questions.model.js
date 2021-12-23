module.exports = (sequelize, Sequelize) => {
    const test_question = sequelize.define("test_question", {
        
       }, {
        timestamps: true,
    })
    test_question.test=test_question.belongsTo(require("./tests.model")(sequelize,Sequelize))
    test_question.question=test_question.belongsTo(require("./question.model")(sequelize,Sequelize))
    
    return test_question
};