const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')

import findUser from "./utils/sql/findUser"
import formatMessage from "./utils/formatMessage"
import storeUser from "./utils/sql/storeUser"
import userLeave from "./utils/sql/userLeave"
import * as types from "./utils/types"

app.use(express.static(__dirname + "/public"))

io.on('connection', socket => {
    socket.on('join room', ({username, room}) => {             
        storeUser(socket.id, username, room)
            .then((res) => {
                let user: types.user = res
                console.log(`joining room ${user.room}`)

                socket.join(user.room)
                io.to(user.room).emit('chat message',
                formatMessage('BOT', `${user.username} has joined the chat`))
            })
            .catch(err => {throw err})  
        
    })

    socket.on('chat message', (msg) => {
        findUser(socket.id)
            .then(res =>{    
                let user: types.user = res    
                console.log('message: ' + msg, user.room)
                console.log(user)
                io.to(user.room).emit('chat message', formatMessage(user.username, msg))
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