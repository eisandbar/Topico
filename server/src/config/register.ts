import bcrypt from 'bcrypt'

import * as types from '../utils/types'
import findOne from '../utils/sql/findOne'
import newUser from '../utils/sql/newUser'

export const register = async (req, res) => {
    const {username, email, password, password2} = req.body
    let errors = []
    if (!username || !email || !password || !password2) {
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
            username,
            email,
            password,
            password2
        }))
    } else {
        try {
            const exists: types.user = await findOne({email})
            if (exists) {
                errors.push({msg: 'User email already exists'})
                res.json(JSON.stringify({
                    errors,
                    username,
                    email,
                    password,
                    password2
                }))
            } else {
                const user : types.user = {
                    password,
                    email,
                    username,
                }
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(user.password, salt, (err, hash) => {
                        if (err) throw err
                        user.password = hash
                        newUser(user)
                            .then(success => {
                                res.json(JSON.stringify({
                                    success: success,
                                    redirectUrl: '/login'
                                }))
                            })
                            .catch(err => { throw err })

                    })
                })
            }
            
        } catch (err) {
            console.error(err)
        }
    }
}