const express = require('express')
const router = express()
const basicRoute = require('./basicRoute')
const ftRoute = require('./foodtruckRoute')

router.use('/', basicRoute)
router.use('/foodtrucks', ftRoute)

module.exports = router;