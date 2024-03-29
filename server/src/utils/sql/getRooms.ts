import con from './myCon'
import * as types from '../types'

const getRooms = async (limit: number = 10) : Promise<Array<types.room>> => new Promise((resolve, reject) => {
    con.connect( error => {
        const getRoom = `SELECT id AS roomId, roomname FROM rooms ORDER BY roomId DESC LIMIT ${limit}`
        con.query(getRoom, (err, res) => {
            if(err) return reject(err)
            return resolve(JSON.parse(JSON.stringify(res)))
        })
    })
})

export default getRooms