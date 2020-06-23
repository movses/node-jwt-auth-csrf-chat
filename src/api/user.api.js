const router = require('express').Router()
const { UserModel } = require('../models')
const { UserService } = require('../services')

router.post('/signup',
    // TODO check body
    UserService.signUp
)

router.post('/login',
    // TODO check body
    UserService.login
)

router.get('/logout',
    UserService.logout
)

// TODO check for data existence
router.delete('/:id', (req, res) => {
    const { id } = req.params
    return UserModel.destroy({ id: id })
        .then(() => res.send('deleted'))
})

module.exports = router
