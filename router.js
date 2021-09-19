const router = require('express').Router();
const clientsRouter = require('./clients/router')

router.use('/clients', clientsRouter);


module.exports = router;