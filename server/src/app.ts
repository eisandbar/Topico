const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

import * as types from "./utils/types"
import newSocket from "./utils/sql/newSocket"
import findSocket from "./utils/sql/findSocket"
import newMessage from "./utils/sql/newMessage"
import findOne from "./utils/sql/findOne"
import findMessage from "./utils/sql/findMessage"
import deleteSocket from "./utils/sql/deleteSocket"

// Body parsing
//app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use('/', require('./routes/index'))

io.on('connection', socket => {
    socket.on('join room', async ({ username, roomId }) => {
        try {
            const userId: number = (await findOne({ username })).id
            const connection: types.connection = await newSocket({
                socketId: socket.id,
                userId,
                roomId,
                username,
            })
            console.log(`joining room ${connection.roomId}`)
            socket.join(connection.roomId)
        } catch (e) {
            console.error(e)
        }
    })

    socket.on('chat message', async (messageText) => {
        try {
            const connection: types.connection = await findSocket(socket.id)
            const messageId: number = await newMessage({
                userId: connection.userId,
                roomId: connection.roomId,
                messageText,
            })
            const message: types.clientMessage = await findMessage(messageId)
            io.to(connection.roomId).emit('chat message', message)
        } catch (e) {
            console.error(e)
        }
    })

    socket.on('disconnect', () => {
        deleteSocket(socket.id)
            .then(res => console.log(`Socket ${socket.id} disconnected`))
            .catch(err => { throw err })
    })

})

http.listen(3080, () => {
    console.log('listening on *: 3080')
})