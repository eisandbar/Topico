const express = require("express")
const router = express.Router()
import {ensureAuthenticated} from "../config/auth"

router.get('/register')
router.post('/register')

router.get('/login')
router.post('/login')