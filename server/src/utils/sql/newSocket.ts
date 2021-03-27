import con from './myCon'
import * as types from '../types'
import findUserId from './findUserId'
import findOne from './findOne'

const newSocket = async (connection: types.connection) : Promise<types.connection> => new Promise(async (resolve, reject) => {
    con.connect(error => {
        const addSocket = "INSERT INTO sockets (socketId, userId, roomId, username) VALUES ?"
        con.query(addSocket, [[[connection.socketId, connection.userId, connection.roomId, connection.username]]], (err, res) => {
            if (err) return reject(err)
            return resolve(connection)
        })
    })
})

export default newSocket