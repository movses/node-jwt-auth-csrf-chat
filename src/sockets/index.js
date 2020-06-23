//socket.io instantiation
const IOSocket = require("socket.io")

const Socket = (function () {
    let io = null

    return {
        getSocketIOInstance: () => io,

        startSocketIO: (server) => {
            if (!io) {
                io = IOSocket(server)
                io.on('connection', () => console.log('New user connected'))
            }
        }
    }
})()

module.exports = Socket