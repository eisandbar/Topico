import findOne from "../utils/sql/findOne"
import * as types from "../utils/types"
import localPassport from 'passport-local'
import bcrypt from 'bcrypt'

const LocalStrategy = localPassport.Strategy

export default (passport) => {
    passport.use(
        new LocalStrategy({usernameField : 'email', passwordField: 'password'}, async (email, password, done) => {
            try {
                const user: types.user = await findOne({email})
                if (!user) {
                    return done(null, false, {message: "Email not registered"})
                }

                // Checking password
                bcrypt.compare(password, user.password, (err, isMatch) => {
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
        done(null, user.id)
    })
    passport.deserializeUser(async (id: number, done) => {
        const user: types.user = await findOne({id})
    })
}