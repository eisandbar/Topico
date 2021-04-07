const clientIP = 'http://localhost:3000'
const IP = process.env.PORT || 'http://localhost:3080'

import express from 'express'
const app = express()
import cors from 'cors'
const http = require('http').Server(app)
import session from 'express-session'
import passport from 'passport'
import localStrategy from './config/localStrategy'
import MongoStore from 'connect-mongo'

localStrategy(passport)

const corsOptions = {
    origin: clientIP,
    optionSuccessStatus: 200,
    credentials: true,
}

const io = require('socket.io')(http, {
    cors: {
        origin:clientIP,
        methods: ["GET", "POST"]
    }
})

import * as types from "./utils/types"
import newSocket from "./utils/sql/newSocket"
import findSocket from "./utils/sql/findSocket"
import newMessage from "./utils/sql/newMessage"
import findMessage from "./utils/sql/findMessage"
import deleteSocket from "./utils/sql/deleteSocket"
import findUserId from './utils/sql/findUserId'


// Body parsing
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Session
app.use(session({
    secret: 'P0l4r8e4R',
    cookie: { maxAge: 60*60*1000 },
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ 
        mongoUrl: 'mongodb://localhost/topico',
        ttl: 24 * 60 * 60,
    }),
}))

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Cors
app.use(cors(corsOptions))

// Routes
app.use('/', require('./routes/index'))

io.on('connection', (socket: any) => {
    socket.on('join room', async ({ username, roomId }: {username:string, roomId:number}) => {
        try {
            const userId: number = await findUserId(username)
            const connection: types.connection = await newSocket({
                socketId: socket.id,
                userId,
                roomId,
                username,
            })
            console.log(`Socket ${connection.socketId} joining room ${connection.roomId}`)
            socket.join(`${connection.roomId}`)
        } catch (err) {
            console.error(err)
        }
    })

    socket.on('chat message', async (messageText:string) => {        
        try {
            const connection: types.connection = await findSocket(socket.id)
            const messageId: number = await newMessage({
                userId: connection.userId!,
                roomId: connection.roomId,
                messageText,
            })
            const message: types.clientMessage = await findMessage(messageId)
            io.to(`${connection.roomId}`).emit('chat message', message)
        } catch (err) {
            console.error(err)
        }
    })

    socket.on('disconnect', () => {
        deleteSocket(socket.id)
            .then(res => console.log(`Socket ${socket.id} disconnected`))
            .catch(err => { throw err })
    })

})

http.listen(3080, () => {
    console.log('listening on *: ' + IP)
})