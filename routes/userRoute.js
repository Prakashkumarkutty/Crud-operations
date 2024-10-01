const express = require('express')

const { fetch, create, update, deleteUser } = require('../controller/userController')

const route = express.Router()


// create user route
route.post('/create', create)

//get user data route
route.get('/getAllUsers', fetch)

//update user data using user id 
route.put('/updateUser/:id', update)

//Delete user data using user id
route.delete('/delete/:id', deleteUser)

module.exports = route;