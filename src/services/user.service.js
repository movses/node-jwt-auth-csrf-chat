const { UserModel }  = require('../models')
const crypto  = require('../libs/crypto')
const CONSTANTS = require('../config/constants')

const _setCookieAndRedirect2HomePage = res => user => {
    const token = crypto.createJWToken({ userId: user.id, username: user.username })
    res.cookie(CONSTANTS.COOKIE_TOKEN, token,
        { httpOnly: true, maxAge: CONSTANTS.FIVE_DAY_MILLIS })

    return res.redirect('/')
}

const UserService = {
    signUp: (req, res, next) => {
        const { username, password } = req.body

        const salt = crypto.generateSalt()
        const passwordHash = crypto.hashPassword(password, salt)

        return UserModel.getUser(username)
            .then(user => {
                if (!user) {
                    return UserModel.registerUser({ username, salt, passwordHash })
                        .then(_setCookieAndRedirect2HomePage(res))
                } else {
                    return Promise.reject(new Error(` ${user.username} already exists`))
                }
            })
            .catch(next)
    },

    login: (req, res, next) => {
        const { password, username } = req.body
        return UserModel.getUser(username)
            .then(user => {
                if (user && crypto.hashPassword(password, user.salt) === user.password) {
                    return _setCookieAndRedirect2HomePage(res)(user)
                } else {
                    return res.redirect('/login')
                }
            })
            .catch(next)
    },

    logout: (req, res, next) => {
        if (req.cookies.token) {
            res.clearCookie(CONSTANTS.COOKIE_TOKEN)
            res.redirect('/login')
        }
    }
}

module.exports = UserService


