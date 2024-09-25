const express = require("express");

const UserController = require('../controllers/users.js');


const router = express.Router()

router.get('/', UserController.getALLUsers)

router.post('/', UserController.createNewUser) 

router.patch('/:idUser', UserController.updateUSER )


module.exports = router; 