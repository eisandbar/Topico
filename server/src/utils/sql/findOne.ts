import con from "./myCon"
import * as types from "../types"

const findOne = async (user: types.user) : Promise<types.user> => new Promise((resolve, reject) => {
    con.connect(error => {
        let key = ""
        let value = ""
        if (user.username) {
            key = "username"
            value = user.username
        } else if (user.email) {
            key = "email"
            value = user.email
        } else if (user.id) {
            key = "id"
            value = `${user.id}`
        }else {
            return resolve(null)
        }

        const findUser = `SELECT * FROM users WHERE ${key} = ${value} LIMIT 1`
        con.query(findUser, (err, res) => {
            if (err) return reject(err)
            if (res[0]) {
                return resolve({
                    id: res[0].id,
                    username: res[0].username,
                    password: res[0].password,
                    email: res[0].email,
                })
            } else return resolve(null)
            
        })

    })
})

export default findOne