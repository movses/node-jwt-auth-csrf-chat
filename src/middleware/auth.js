const jwt = require('jsonwebtoken')
const { JWT } = require('../config/config')
const csurf = require('csurf')

const auth = {
    verifyToken: (req, res, next) => {
        const token = req.cookies.token

        if (!token) {
            res.redirect('/login')
        }

        jwt.verify(token, JWT.SECRET, (err, decoded) => {
            if (err) {
                res.redirect('/login')
            }
            req.userId = decoded.userId
            req.username = decoded.username
            next()
        })
    },

    csrfProtection: csurf({ cookie: true })
}

module.exports = auth
