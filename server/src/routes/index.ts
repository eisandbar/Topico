const express = require("express")
const router = express.Router()
// import {ensureAuthenticated} from "../config/auth"

//router.get('/register')
router.post('/register', (req, res) => {
    console.log(req.body)
    const {name, email, password, password2} = req.body
    let errors = []
    console.log(`name: ${name}| email: ${email}| password: ${password}`)
    if (!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields.'})
    }

    if (password !== password2) {
        errors.push({msg: 'Passwords do not match'})
    }

    if (password.length < 8) {
        errors.push({msg: 'Password must be at least 8 characters long.'})
    }

    if (errors.length > 0) {
        res.json(JSON.stringify({
            errors,
            name,
            email,
            password,
            password2
        }))
        console.log("replied")
    } else {
        console.log("redirect attempt")
        res.json(JSON.stringify({
            success:true,
            redirectUrl: '/login'
        }))
    }
})

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