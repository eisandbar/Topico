const express = require("express")
const router = express.Router()
// import {ensureAuthenticated} from "../config/auth"

//router.get('/register')
//router.post('/register')

//router.get('/login')
//router.post('/login')

router.get('/test', (req, res) => {
    res.json({data: "hello"})
})

router.get('/rooms', (req, res) => {
    const newRoom = {
        id: 4,
        name: "Room 4",
        icon: undefined,
    }
    res.json({rooms: JSON.stringify([newRoom])})
})

router.post('/rooms', (req, res) => {
    console.log(req.body)
    const newRoom = {
        id: 5,
        name: req.body.name,
        icon: undefined,
    }
    res.json({rooms:JSON.stringify([newRoom])})
})

module.exports = router