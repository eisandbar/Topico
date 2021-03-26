import con from "./myCon"
import * as types from "../types"

const findOne = async (email:string) : Promise<types.user> => new Promise((resolve, reject) => {
    con.connect(error => {
        const findUser = "SELECT username, password FROM users WHERE email = ? LIMIT 1"
        con.query(findUser, [[[email]]], (err, res) => {
            if (err) return reject(err)
            return resolve({
                username: res[0].username,
                password: res[0].password,
                email,
            })
        })

    })
})

export default findOne