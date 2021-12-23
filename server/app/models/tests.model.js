module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("test", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        slug: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: true,
    });
    return Test;
};