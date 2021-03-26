import con from './myCon'
import * as types from '../types'

const newRoom = async (roomname) : Promise<void> => new Promise((resolve, reject) => {
    con.connect( error => {
        const addRoom = "INSERT INTO rooms (roomname) VALUES ?"
        con.query(addRoom, [[[roomname]]], (err, res) => {
            if(err) return reject(err)
            return resolve()
        })
    })
})

export default newRoom