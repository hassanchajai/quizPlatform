const db = require("../../../models");

module.exports = {
    getAll: (req, res) => {
        db.user.findAll({
            where: {
                role: 1
            }
        })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving students."
                });
            });
    },
    add: (req, res) => {
        const { name, email, password, birthday } = req.body;
        const values = {
            name,
            email,
            password,
            birthday
        }
        // Save Tutorial in the database
        db.user.create({ ...values, role: 1 })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Student."
                });
            });

    },
    update: (req, res) => {
        const { name, email, password, birthday } = req.body;
        const id = req.params.id;
        const values = {
            name,
            email,
            birthday,
            role: 1
        }
        if (password != "") {
            values.password = password
        }

        db.user.update(values, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "student was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update student with id=${id}. Maybe student was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating student with id=" + id
                });
            });

    },
    delete: (req, res) => {
        const id = req.params.id;
        db.user.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "student was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete student with id=${id}. Maybe Tutorial was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete student with id=" + id
                });
            });
    }
}