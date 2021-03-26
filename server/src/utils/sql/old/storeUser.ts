import con from "../myCon"
import * as types from "../../types"

const storeUser = async (connection: types.connection): Promise<types.connection> => new Promise((resolve, reject) => {
    con.connect(error => {
        const {socketId, username, roomId} = connection
        const checkUser = 'SELECT id FROM users WHERE username = ? LIMIT 1'
        const addUser = 'INSERT INTO users (username) VALUES ?'
        const addSocket = 'INSERT INTO sockets (socketId, userId, room) Values ?'
        con.query(checkUser, [[[username]]], (err, res) => {
            if (err) return reject(err)
            let userId = NaN
            if (res[0]) {
                console.log('Existing user ' + username)
                userId = res[0].id
                con.query(addSocket, [[[socketId, userId, roomId]]], (err,res) => {
                    if (err) return reject(err)
                    console.log('Socket added', socketId)
                    return resolve({socketId, username, roomId})
                })
            } else {
                con.query(addUser, [[[username]]], (err, res) => {
                    if (err) return reject(err)
                    console.log(`New user ${username} added`)
                    userId = res.insertId
                    con.query(addSocket, [[[socketId, userId, roomId]]], (err,res) => {
                        if (err) return reject(err)
                        console.log('Socket added', socketId)
                        return resolve( {socketId, username, roomId})
                    })
                })
            }
        })
        
    })
})

export default storeUser