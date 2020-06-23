const Socket = require('../sockets')

const SocketService = {
    publishMessage: (req, res, next) => {
        const { message } = req.body
        const io = Socket.getSocketIOInstance()

        return Promise.resolve()
            .then(() => {
                io.emit('message', { message: message, username: req.username })
                res.sendStatus(200)
            })
            .catch(next)
    }
}

module.exports = SocketService
