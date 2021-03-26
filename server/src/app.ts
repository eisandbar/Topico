const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

import findUser from "./utils/sql/old/findUser"
import formatMessage from "./utils/formatMessage"
import storeUser from "./utils/sql/old/storeUser"
import userLeave from "./utils/sql/old/userLeave"
import * as types from "./utils/types"

//app.use(express.static(__dirname + "/public"))

// Body parsing
//app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use('/', require('./routes/index'))

io.on('connection', socket => {
    socket.on('join room', ({username, roomId}) => {             
        storeUser({socketId: socket.id, username, roomId})
            .then((res) => {
                let connection: types.connection = res
                console.log(`joining room ${connection.roomId}`)

                socket.join(connection.roomId)
                io.to(connection.roomId).emit('chat message',
                formatMessage('BOT', `${connection.username} has joined the chat`))
            })
            .catch(err => {throw err})  
        
    })

    socket.on('chat message', (msg) => {
        findUser(socket.id)
            .then(res =>{    
                let connection: types.connection = res    
                console.log('message: ' + msg, connection.roomId)
                console.log(connection)
                io.to(connection.roomId).emit('chat message', formatMessage(connection.username, msg))
        })
            .catch(err => {throw err})   
    })

    socket.on('disconnect', () => {
        userLeave(socket.id)
        .then(res => {
            let user = res
            console.log(`${user.username} disconnected`)
        })
    })

})

http.listen(3080, () => {
    console.log('listening on *: 3080')
})