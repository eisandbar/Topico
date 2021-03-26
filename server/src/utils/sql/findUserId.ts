import con from './myCon'
import * as types from '../types'

const findUserId = async (username: string) : Promise<number> => new Promise((resolve, reject) => {
    con.connect(error => {
        const findUserId = "SELECT id FROM users WHERE username = ? LIMIT 1"
        con.query( findUserId, [[[username]]], (err, res) => {
            if (err) return reject(err)
            return resolve(res[0].id)
        })
    })
})

export default findUserId