const db = require("../../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes")
module.exports = {
    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        // console.log(password);
        // Find user by email
        db.user.findOne({
            where: {
                email
            }
        })
            .then(user => {
                // Check if user exists
                if (!user) {
                    return res.status(StatusCodes.NOT_FOUND).send({
                        message: "Email not found!"
                    });
                } else {
                    // Check password
                    // console.log(user.);
                    bcrypt.compare(password, user.dataValues.password)
                        .then(isMatch => {
                            // console.log(isMatch)
                            if (isMatch) {
                                // check if the user's email verified or not yet 
                                // Create JWT Payload
                                const { password, ...rest } = user.dataValues;
                                // Sign token
                                jwt.sign(
                                    { user: rest },
                                    "secret",
                                    {
                                        expiresIn: "1h"
                                    },
                                    (err, token) => {
                                        if (err) {
                                            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                                                message: "Error while creating token"
                                            });
                                        } else {
                                            res.status(StatusCodes.OK).send({
                                                token: "Bearer " + token,
                                            });
                                        }
                                    }
                                );

                            } else {
                                return res.status(StatusCodes.BAD_REQUEST).send({
                                    message: "Password incorrect"
                                });
                            }
                        })
                        .catch(() => res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                            message: "Error while coparing passwords"
                        }));
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
                    message: "Error while searching for user in db",

                })
            });
    },
    register: (req, res) => {
        db.user.findOne({
            where: {
                email:req.body.email
            }
        })
            .then(async (user) => {
                if (user) {
                    return res.send({
                        message: "Email already used!",
                    });
                }
                const salt = await bcrypt.genSalt(10);

                let hashpwdpassword = await bcrypt.hash(req.body.password, salt);

                const UserModel = await db.user.create({...req.body,password:hashpwdpassword});
                // generate salt to hash password
                // now we set user password to hashed password
                return res.json({
                    message: "user added succefuly!",
                });
            })
            .catch((err) => {
                return res.json({ status: false, error: err.message });
            });
    } 

}