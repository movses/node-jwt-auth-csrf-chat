const router = require('express').Router()
const { AuthMiddleware } = require('../middleware')

router.get('/signup', (req, res, next) => {
    console.log('sign up view')
    return res.render('signup')
})

router.get('/login', (req, res, next) => {
    console.log('login view')
    return res.render('login')
})

router.get('/',
    AuthMiddleware.verifyToken,
    AuthMiddleware.csrfProtection,
    (req, res, next) => res.render('home', { csrfToken: req.csrfToken()})
)

module.exports = router
