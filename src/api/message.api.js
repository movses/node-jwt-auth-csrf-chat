const router = require('express').Router()
const { AuthMiddleware, ValidationMiddleware } = require('../middleware')
const { SocketService }  = require('../services')

router.use(AuthMiddleware.verifyToken)
router.use(AuthMiddleware.csrfProtection)

router.post('/publish',
    ValidationMiddleware.validatePublish,
    SocketService.publishMessage
)

module.exports = router
