import express from "express"
const router = express.Router()
import passport from 'passport'

import * as types from '../utils/types'

import {ensureAuthenticated} from "../config/ensureAuthenticated"
import { register } from "../config/register"
import newRoom from "../utils/sql/newRoom"
import getRooms from "../utils/sql/getRooms"

//router.get('/register')

router.post('/register', register)

//router.get('/login')

router.post('/login', passport.authenticate('local'), (req, res) => {
    const user: types.user = req.user
    if(user) {
        res.json(JSON.stringify({
            user: {
                username: user.username,
                email: user.email,
            },
            redirectUrl: '/rooms',
            loggedIn: true,
        }))
    }
})

router.get('/test', (req, res) => {
    res.json({data: "hello"})
})

router.get('/rooms', async (req, res) => {
    const rooms: Array<types.room> = await getRooms(10)
    res.json(JSON.stringify({rooms: rooms}))
})

router.post('/rooms', async (req, res) => {
    const roomId = await newRoom(req.body.roomname)
    const room: types.room = {
        roomId,
        roomname: req.body.name,
        icon: undefined,
    }
    res.json(JSON.stringify({rooms: [room]}))
})

router.get('/authenticate', ensureAuthenticated)

module.exports = router