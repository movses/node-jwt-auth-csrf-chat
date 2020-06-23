const CONFIG = {
    PG: {
        USERNAME: process.env.PG_USERNAME || 'fygcbclr',
        PASSWORD: process.env.PG_PASSWORD || 'f7alHfkxjIjDAIbLfBusvqPChv2PwTsZ',
        DB: process.env.PG_DB || 'fygcbclr',
        HOST: process.env.PG_HOST || 'ruby.db.elephantsql.com',
        PORT: process.env.PG_PORT || 5432
    },
    JWT: {
        SECRET: process.env.JWT_SECRET || 'my-super-secret'
    }
}

module.exports = CONFIG
