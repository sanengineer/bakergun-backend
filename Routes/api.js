const express = require('express')
const router = express.Router()

router.use('/api/v1/posts', require('./player'))

module.exports = router