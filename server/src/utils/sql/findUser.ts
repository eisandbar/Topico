import con from "./myCon"
import * as types from "../types"

const findUser = (socketId): Promise<types.user>  => new Promise((resolve, reject) =>{
    let username = ''
    let room = ''
    con.connect(error => {
        const selectUser = 'SELECT userId, room FROM sockets WHERE socketId = ? LIMIT 1'
        const userData = 'SELECT username FROM users WHERE id = ? LIMIT 1'
        
        con.query(selectUser, [socketId], (err, res) => {
            if (err) return reject(err)
            if (res[0]) {
                room = res[0].room
                con.query(userData, [res[0].userId], (err, res) => {
                    if (err) return reject(err)
                    username = res[0].username
                    console.log(username, room)
                    return resolve({socketId, username, room})                   
                })
            }
        })
    });
    
})

export default findUser