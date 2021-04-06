import con from './myCon'
import * as types from '../types'

const findUserId = async (username: string) : Promise<number> => new Promise((resolve, reject) => {
    con.connect(error => {
        const findUserId = "SELECT id FROM users WHERE username = ? LIMIT 1"
        con.query( findUserId, [[[username]]], (err, res) => {
            if (err) return reject(err)
            if (res[0]) {
                return resolve(res[0].id)
            } else return reject("User not found in database.")
        })
    })
})

export default findUserId