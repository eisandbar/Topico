import findOne from "../utils/sql/findOne"
import * as types from "../utils/types"
import localPassport from 'passport-local'
import bcrypt from 'bcrypt'
import { PassportStatic } from "passport"

const LocalStrategy = localPassport.Strategy

export default (passport: PassportStatic) => {
    passport.use(
        new LocalStrategy({usernameField : 'email', passwordField: 'password'}, async (email, password, done) => {
            try {
                const user: types.user | undefined = await findOne({email})
                if (!user) {
                    return done(null, false, {message: "Email not registered"})
                }

                // Checking password
                bcrypt.compare(password, user.password!, (err, isMatch) => {
                    if (err) throw err
                    if (isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, {message: "Password is incorrect"})
                    }
                })
            } catch (err) {
                console.error(err)
            }
        })
    )

    // Necessary for sessions
    passport.serializeUser((user: types.user, done) => {
        console.log("Trying to serialize", user)
        done(null, user.id)
    })
    passport.deserializeUser(async (id: any, done) => {
        const user: types.user | undefined = await findOne({id})
        done(null, user)
    })
}