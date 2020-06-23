const UserSchema = require('./schemas/user.schema')
const sequelize = require('../db').getInstance()

const UserModel =  sequelize.define(
    'User',
    UserSchema,
    { timestamps: false }
)

/**
 * TODO assign appropriate roles
 * Create new user
 * @param username
 * @param passwordHash
 * @param salt
 */
UserModel.registerUser = ({ username, passwordHash, salt }) => {
    const userData = {
        salt,
        username,
        password: passwordHash,
        roleId: 1
    }

    return UserModel.create(userData)
}

/**
 * Get user by username
 * @param username
 */
UserModel.getUser = username => {
    const query = {
        where: {
            username
        }
    }

    return UserModel.findOne(query)
}

module.exports = UserModel

