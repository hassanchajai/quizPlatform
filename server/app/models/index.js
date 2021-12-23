const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.subject = require("./subject.model")(sequelize, Sequelize);
db.question = require("./question.model")(sequelize, Sequelize);
db.question_type = require("./questions_types.model")(sequelize, Sequelize);
db.response = require("./reponses.model")(sequelize, Sequelize);
db.level = require("./levels.model")(sequelize, Sequelize);
db.user = require("./users.model")(sequelize, Sequelize);
db.test = require("./tests.model")(sequelize, Sequelize);
db.test_question = require("./test_questions.model")(sequelize, Sequelize);
db.history_test = require("./history_test.model")(sequelize, Sequelize);
db.result= require("./result.model")(sequelize,Sequelize)

module.exports = db;