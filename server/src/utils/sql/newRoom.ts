import con from './myCon'
import * as types from '../types'

const newRoom = async (roomname: string) : Promise<number> => new Promise((resolve, reject) => {
    if (roomname == "") {
        console.log("Room name cannot be null")
        return reject()
    }
    
    con.connect( error => {
        const addRoom = "INSERT INTO rooms (roomname) VALUES ?"
        con.query(addRoom, [[[roomname]]], (err, res) => {
            if(err) return reject(err)
            return resolve(res.insertId)
        })
    })
})

export default newRoom