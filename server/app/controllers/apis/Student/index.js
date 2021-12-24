const db = require("../../../models");

module.exports = {
    getAll: (req, res) => {
        db.user.findAll({
            where: {
                role: 0
            }
        })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            });
    },
    add: (req, res) => {

        // Validate request
        if (!req.body.title) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }

        // Create a Tutorial
        const tutorial = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        };

        // Save Tutorial in the database
        db.user.create(tutorial)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });

    },
}