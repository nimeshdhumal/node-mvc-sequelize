const userModel = require('../model/userModel');

exports.createSaver = async (req, res) => {
    if (!req.body.email || !req.body.firstName) {
        return res.status(400).send({ message: "First name and email are required!" });
    }

    try {
        const user = await userModel.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        });
        res.status(201).send({ message: 'Data saved into DB successfully!' });
    } catch (error) {
        res.status(500).send({ message: error.message || "Some error occurred while creating the User." });
    }
}

exports.getAll = async (req, res) => {
    try {
        const getUsers = await userModel.User.findAll()
        res.status(200).send(getUsers);
    } catch (error) {
        res.status(400).send({ message: "DATA NOT FOUND" });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = await userModel.User.findOne({ where: { id: `${id}` } });
        if (userId != null) {
            res.send(userId);
        } else {
            res.status(400).send({ message: `DATA NOT FOUND BY GIVEN ID: ${id}` });
        }
    } catch (error) {
        res.status(400).send({ message: "Error occurs:", error });
    }
}

exports.updateUser = async (req, res) => {
    const id = req.params.id;
    if (!req.body.email || !req.body.firstName) {
        return res.status(400).send({ message: "First name and email are required!" });
    }

    try {
        const checkIdAvailability = await userModel.User.findOne({ where: { id: `${id}` } });

        if (checkIdAvailability != null) {
            try {
                await userModel.User.update({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email
                }, { where: { id: `${id}` } });
                res.status(201).send({ message: 'Data updated successfully!' });
            } catch (error) {
                res.status(500).send({ message: error.message || "Some error occurred while updating the User." });
            }

        } else { res.status(400).send({ message: `GIVEN ID DOES NOT FOUND :: ${req.params.id}` }); }
    } catch (error) {
        res.status(500).send({ message: error.message || "Some error occurred while updating the User." });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const checkIdAvailability = await userModel.User.findOne({ where: { id: `${req.params.id}` } });
        if (checkIdAvailability != null) {
            const rowsAffected = await userModel.User.destroy({ where: { id: `${req.params.id}` } });
            console.log(rowsAffected);
        }
    } catch (error) {
        res.status(500).send({ message: error.message || "Some error occurred while deleting the User." });
    }
}