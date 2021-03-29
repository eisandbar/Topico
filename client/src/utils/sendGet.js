import fetch from "node-fetch"

/* 
    sendGet function GETs from the server.
    Returns a Promise that resolves to the parsed JSON object.
*/

export const sendGet = async ({url}) => new Promise((resolve, reject) => {
    fetch("http://localhost:3000" + url, { // GET from server
        method: "GET",
        headers: {"Content-Type": "application/json"},
    })
    .then(res => res.json())
    .then(resJson => {
    return resolve(JSON.parse(resJson))
    })
})