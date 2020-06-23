const express = require('express')
const app = express()

const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')

const path = require('path')

const { ErrorHandlerMiddleware } = require('./middleware')

/**
 * HTML view setup
 */
app.set('views', path.join(__dirname, 'views'))
app.engine("html", require("ejs").__express)
app.set('view engine', 'html')

/**
 * Middleware which setups the `morgan` logger.
 */
app.use(morgan('dev'))

/**
 * Protect from common security attacks
 */
app.use(helmet())


/**
 * Enable access for all origins
 */
app.use(cors())

/**
 * Request parsing
 */
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))


/**
 * Apis
 */
const health = require('./api/health.api')
const viewApi = require('./api/view.api')
const api = require('./api')

app.use('/health', health)
app.use('/api/v1', api)
app.use('/', viewApi)


/**
 * Error Api
 */
app.use(ErrorHandlerMiddleware.handleError())

module.exports = app
