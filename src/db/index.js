const Sequelize = require('sequelize')
const { PG } = require('../config/config')

const DB = (() => {
    let sequelize = null

    return {
        getInstance: () => {
            if (!sequelize) {
                sequelize = new Sequelize(PG.DB, PG.USERNAME, PG.PASSWORD, {
                    host: PG.HOST,
                    port: PG.PORT,
                    dialect: 'postgres'
                })
            }
            return sequelize
        }
    }
})()

module.exports = DB
