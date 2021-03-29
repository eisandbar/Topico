import express from "express"
const router = express.Router()
import passport from 'passport'

import * as types from '../utils/types'
import {ensureAuthenticated} from "../config/ensureAuthenticated"
import { register } from "../config/register"
import newRoom from "../utils/sql/newRoom"
import getRooms from "../utils/sql/getRooms"
import getMessages from "../utils/sql/getMessages"

//router.get('/register')

router.post('/register', register)

//router.get('/login')

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err: any, user: types.user, info: any) => {
    console.log("Posted to login")
    if (err) throw err
    if (!user) {
        console.log(req.body)
        res.json(JSON.stringify({
            loggedIn: false,
        }))
    } else {
        req.logIn(user, err =>{
            if (err) throw err
            res.json(JSON.stringify({
                user: {
                    username: user.username,
                    email: user.email,
                },
                redirectUrl: '/rooms',
                loggedIn: true,
            }))
        })
    }
        
    })(req, res, next)
})

router.get('/test', (req, res) => {
    res.json({data: "hello"})
})

router.post('/getMessages', async (req,res) => {
    const messages: Array<types.clientMessage> = await getMessages(req.body.roomId)
    console.log(messages, `'${req.body.roomId}'`)
    res.json(JSON.stringify({messages}))
})

router.get('/getRooms', async (req, res) => {
    const rooms: Array<types.room> = await getRooms(10)
    res.json(JSON.stringify({rooms}))
})

router.post('/newRoom', async (req, res) => {
    const roomId = await newRoom(req.body.roomname)
    const room: types.room = {
        roomId,
        roomname: req.body.roomname,
        icon: undefined,
    }
    res.json(JSON.stringify({rooms: [room]}))
})

router.get('/authenticate', ensureAuthenticated)

router.get('/logout', (req,res) => {
    req.logout() // passport function
    res.json(JSON.stringify({loggedIn: false}))
})

module.exports = router