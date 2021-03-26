import con from "./myCon"
import * as types from "../types"

const newUser = async (user: types.user) : Promise<void> => new Promise((resolve, reject) => {
    con.connect(error => {
        const addUser = "INSERT INTO users (username, email, password) VALUES ?"
        const {username, email, password} = user

        con.query(addUser, [[[username, email, password]]], (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        })
    })

})

export default newUser