module.exports = (sequelize, Sequelize) => {
    const result = sequelize.define("result", {
        score: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true,
    });
    result.user = result.belongsTo(require('./users.model')(sequelize, Sequelize))
    result.test = result.belongsTo(require('./tests.model')(sequelize, Sequelize))

    return result;
};