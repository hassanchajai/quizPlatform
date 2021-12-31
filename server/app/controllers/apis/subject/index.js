const db = require("../../../models");

module.exports = {
    getAll: (req, res) => {
        db.subject.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving subjects."
                });
            });
    },
    add: (req, res) => {
        const { title, description, published } = req.body;
        const values = {
            title, description, published
        }
        // Save Tutorial in the database
        db.subject.create({ ...values })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the subject."
                });
            });

    },
    update: (req, res) => {
        const { title, description, published } = req.body;
        const values = {
            title, description, published
        }
        const id = req.params.id;
        db.subject.update(values, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "subject was updated successfully."
                    });
                } else {
                    res.send({
                        message: `Cannot update subject with id=${id}. Maybe subject was not found or req.body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error updating subject with id=" + id
                });
            });

    },
    delete: (req, res) => {
        const id = req.params.id;
        db.subject.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send({
                        message: "subject was deleted successfully!"
                    });
                } else {
                    res.send({
                        message: `Cannot delete subject with id=${id}. Maybe subject was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Could not delete subject with id=" + id
                });
            });
    }
}