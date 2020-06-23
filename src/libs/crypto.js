const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const { JWT } = require('../config/config')
const CONSTANTS = require('../config/constants')

const generateSalt = () => {
    return crypto.randomBytes(64).toString('hex').substr(0, 64)
}

const hashPassword = (password, salt) => {
    return crypto.createHmac('sha256', salt).update(password).digest('hex')
}

/**
 * Creates JWT token based on provided payload
 * @param payload
 * @returns {String}
 */
const createJWToken = (payload) => {
    const options = { expiresIn: CONSTANTS.FIVE_DAY, issuer: 'Movses' }
    const secret = JWT.SECRET
    return jwt.sign(payload, secret, options)
}

module.exports = {
    generateSalt,
    hashPassword,
    createJWToken
}
