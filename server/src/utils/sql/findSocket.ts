import con from "./myCon"
import * as types from "../types"

const findSocket = async (socketId: string) : Promise<types.connection> => new Promise((resolve, reject) => {
    con.connect(error => {
        const getSocket = `SELECT * FROM users WHERE socketId = ${socketId} LIMIT 1`
        con.query(getSocket, [[[]]], (err, res) => {
            if (err) return reject(err)
            if (res[0]) {
                return resolve({                    
                    socketId: res[0].socketId,
                    userId: res[0].userId,
                    roomId: res[0].roomId,
                    username: res[0].username,
                })
            } else return resolve(null)
            
        })

    })
})

export default findSocket