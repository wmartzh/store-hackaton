const router = require('express').Router();
const clientController = require('./controller')
router.post('/',clientController.create)

module.exports =router;