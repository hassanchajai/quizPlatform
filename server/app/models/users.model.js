module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            required: true
        },
        image: Sequelize.DataTypes.STRING,
        role: Sequelize.DataTypes.INTEGER
    }, {
        timestamps: true,
    });
    return User;
};