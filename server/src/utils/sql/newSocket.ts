import con from './myCon'
import * as types from '../types'
import findUserId from './findUserId'
import findOne from './findOne'

const newSocket = async (connection: types.connection) : Promise<void> => new Promise(async (resolve, reject) => {
    const userId = (await findOne({username: connection.username})).id
    con.connect(error => {
        const addSocket = "INSERT INTO sockets (socketId, userId, roomId, username) VALUES ?"
        con.query(addSocket, [[[connection.socketId, userId, connection.roomId, connection.username]]], (err, res) => {
            if (err) return reject(err)
            return resolve()
        })
    })
})

export default newSocket