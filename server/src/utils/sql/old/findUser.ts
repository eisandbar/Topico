import con from "../myCon"
import * as types from "../../types"

const findUser = (socketId): Promise<types.connection>  => new Promise((resolve, reject) =>{
    let username = ''
    let roomId = ''
    con.connect(error => {
        const selectUser = 'SELECT userId, room FROM sockets WHERE socketId = ? LIMIT 1'
        const userData = 'SELECT username FROM users WHERE id = ? LIMIT 1'
        
        con.query(selectUser, [socketId], (err, res) => {
            if (err) return reject(err)
            if (res[0]) {
                roomId = res[0].room
                con.query(userData, [res[0].userId], (err, res) => {
                    if (err) return reject(err)
                    username = res[0].username
                    console.log(username, roomId)
                    return resolve({socketId, username, roomId})                   
                })
            }
        })
    });
    
})

export default findUser