import con from "./myCon"
import * as types from "../types"

const deleteSocket = async (socketId: string) : Promise<void> => new Promise((resolve, reject) => {
    con.connect(error => {
        const delSocket = "DELETE FROM sockets WHERE socketId = ?"
        con.query(delSocket, [[[socketId]]], (err, res) => {
            if (err) return reject(err)
            return resolve()
        })
    })
})


export default deleteSocket