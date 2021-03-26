import con from './myCon'
import * as types from '../types'

const newMessage = (message: types.serverMessage) : Promise<number> => new Promise((resolve, reject) => {
    con.connect(error => {
        const addMessage = "INSERT INTO messages (userId, roomId, messageText) VALUES ?"
        const {userId, roomId, messageText} = message
        con.query(addMessage, [[[userId, roomId, messageText]]], (err, res) => {
            if (err) return reject(err)
            return resolve(res.insertId)
        })
    })
})

export default newMessage