const Sequelize = require('sequelize')

const UserSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salt: {
        type: Sequelize.STRING,
        allow: false
    }
}

module.exports = UserSchema
