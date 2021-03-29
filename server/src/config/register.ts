import bcrypt from 'bcrypt'

import * as types from '../utils/types'
import findOne from '../utils/sql/findOne'
import newUser from '../utils/sql/newUser'

export const register = async (req: any, res: any) => {
    console.log("posted to register")
    const {username, email, password, password2} = req.body
    let errors: Array<object> = []
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
            const emailExists: types.user | undefined = await findOne({email})
            const usernameExists: types.user | undefined = await findOne({username})
            if (emailExists || usernameExists) {
                if (emailExists) errors.push({msg: 'User email already exists'})
                if (usernameExists) errors.push({msg: 'Username already exists'})
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
                                console.log("Registered user: ", user)
                                res.json(JSON.stringify({
                                    errors,
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