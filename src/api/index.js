const router = require('express').Router()
const userApi = require('./user.api')
const messageApi = require('./message.api')

router.use('/user', userApi)
router.use('/message', messageApi)

module.exports = router
