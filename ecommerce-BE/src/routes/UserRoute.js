const  express = require('express')
const route = express.Router(); 
const userController = require('../controllers/UserController')

 route.post('/sign-up', userController.createUser)
 route.post('/sign-in', userController.loginUser)

 module.exports = route;