const userModel = require('../model/userModel');

exports.createSaver = async (req, res) => {
    if (!req.body.email || !req.body.firstName) {
        return res.status(400).send({ message: "First name and email are required!" });
    }
    console.log(req.body);
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
        const userId = await userModel.User.findOne({ id: `${id}` });
        res.send(userId);
    } catch (error) {
        res.status(400).send({ message: "Error occurs:", error });
    }
}

exports.updateUser = async (req, res) => {
    
}

exports.deleteUser = async (req, res) => {

}