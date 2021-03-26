const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

import findUser from "./utils/sql/findUser"
import formatMessage from "./utils/formatMessage"
import storeUser from "./utils/sql/storeUser"
import userLeave from "./utils/sql/userLeave"
import * as types from "./utils/types"

//app.use(express.static(__dirname + "/public"))

// Body parsing
//app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Routes
app.use('/', require('./routes/index'))

io.on('connection', socket => {
    socket.on('join room', ({username, room}) => {             
        storeUser(socket.id, username, room)
            .then((res) => {
                let connection: types.connection = res
                console.log(`joining room ${connection.room}`)

                socket.join(connection.room)
                io.to(connection.room).emit('chat message',
                formatMessage('BOT', `${connection.username} has joined the chat`))
            })
            .catch(err => {throw err})  
        
    })

    socket.on('chat message', (msg) => {
        findUser(socket.id)
            .then(res =>{    
                let connection: types.connection = res    
                console.log('message: ' + msg, connection.room)
                console.log(connection)
                io.to(connection.room).emit('chat message', formatMessage(connection.username, msg))
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