import con from './myCon'
import * as types from "../types"

const userLeave = (socketId): Promise<types.user> => new Promise((resolve, reject) => {
    let username = ''
    let room = ''
    con.connect(error => {
        const selectUser = 'SELECT userId, room FROM sockets WHERE socketId = ? LIMIT 1'
        const userData = 'SELECT username FROM users WHERE id = ? LIMIT 1'
        const delSocket = 'DELETE FROM sockets WHERE socketId = ?'
        con.query(selectUser, [socketId], (err, res) => {
            if (err) reject(err)
            if (res[0]) {
                room = res[0].room
                con.query(userData, [res[0].userId], (err, res) => {
                    if (err) reject(err)
                    username = res[0].username                  
                    return resolve({socketId, username, room})
                })
            }
        })
        con.query(delSocket, [socketId], (err, res) => {
            if (err) reject(err)
            console.log('Socket deleted')
        })
    })
})

export default userLeave