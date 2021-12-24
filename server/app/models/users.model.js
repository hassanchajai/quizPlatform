const bcrypt=require("bcryptjs")
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
            required: true,
             set(value) {
                // console.log(value);
                const salt =  bcrypt.genSaltSync(10);

                let hashpwdpassword =  bcrypt.hashSync(value, salt);

                this.setDataValue('password', hashpwdpassword);
              }
        },
        birthday: Sequelize.DataTypes.DATE,
        image: Sequelize.DataTypes.STRING,
        role: Sequelize.DataTypes.INTEGER
    }, {
        timestamps: true,
    });
    return User;
};