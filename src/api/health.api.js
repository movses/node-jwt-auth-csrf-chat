const router = require('express').Router()

/**
 * Route to check app is UP or DOWN
 */
router.get('/', (req, res) => {
    res.send('OK')
})

module.exports = router
