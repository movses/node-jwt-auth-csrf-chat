const Joi = require('joi')

const _validate = (parameters, schema, next) => {
    const { error } = Joi.validate(parameters, schema)

    if (error) {
        const message = error.message || null
        return next(new Error(message))
    }
    next()
}

const validatePublish = (req, res, next) => {
    _validate({ body: req.body }, {
        body: {
            message: Joi.string().required(),
            _csrf: Joi.string().required()
        }
    }, next)
}

module.exports = {
    validatePublish
}
