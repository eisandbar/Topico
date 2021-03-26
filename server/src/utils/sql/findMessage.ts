import con from './myCon'
import * as types from '../types'

const findMessage = (messageId: number) : Promise<types.clientMessage> => new Promise((resolve, reject) => {
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
            m.id = ?
        LIMIT 1
        `
        con.query(getMessage, [[[messageId]]], (err, res) => {
            if (err) return reject(err)
            return resolve(res[0])
        })
    })
})

export default findMessage