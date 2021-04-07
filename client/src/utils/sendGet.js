import fetch from "node-fetch"
import {IP} from '../index'
/* 
    sendGet function GETs from the server.
    Returns a Promise that resolves to the parsed JSON object.
*/

export const sendGet = async ({url, credentials}) => new Promise((resolve, reject) => {
    fetch(IP + url, { // GET from server
        method: "GET",
        headers: {"Content-Type": "application/json"},
        credentials: credentials || 'same-origin'
    })
    .then(res => res.json())
    .then(resJson => {
    return resolve(JSON.parse(resJson))
    })
})