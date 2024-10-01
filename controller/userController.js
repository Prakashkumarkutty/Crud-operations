const Users = require('../model/userModel')


//Create user API

exports.create = async (req, res) => {
    try {
        const userData = new Users(req.body)
        const { email } = userData

        const userExist = await Users.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "User already exists..." })
        }
        const savedUser = await userData.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

// get user API

exports.fetch = async (req, res) => {
    try {
        // return res.json("Hello World.")
        const users = await Users.find()
        if (users.length === 0) {
            return res.status(404).json({ message: "User not found" })
        }
        res.status(200).json(users)
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}


//Update user API

exports.update = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await Users.findOne({ _id: id })
        if (!userExist) {
            return res.status(404).json({ message: "User not found." })
        }
        const updateUser = await Users.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json(updateUser)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" })
    }
}

//Delete User API

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await Users.findById({ _id: id })

        if (!userExist) {
            return res.status(404).json({ message: "User not found" })
        }
        await Users.findByIdAndDelete(id)
        res.status(201).json({ message: "User deleted successfully." })
    } catch (error) {
        res.status(500).json({ error: "Internal Srever error" })
    }
}