import con from './myCon'
import * as types from '../types'

const getMessages = (roomId: number) : Promise<Array<types.clientMessage>> => new Promise((resolve, reject) => {
    con.connect(error => {
        const getMessage = `
        SELECT 
            m.id AS id,
            u.username AS username, 
            r.roomname AS roomname, 
            m.messageText AS messageText, 
            m.date AS date
        FROM 
            messages AS m 
        INNER JOIN 
            users AS u
        ON
            m.userId = u.id
        INNER JOIN
            rooms AS r
        ON
            m.roomId = r.id
        WHERE
            r.id = '${roomId}'
        ORDER BY m.id DESC
        LIMIT 15
        `
        con.query(getMessage, (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        })
    })
})

export default getMessages