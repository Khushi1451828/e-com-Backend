const express = require('express')
const router = express.Router()
const UserController = require('../Controllers/UserController')

router.post('/showResult',UserController.showResult)
router.post('/add-user',UserController.AddUser);






module.exports = router