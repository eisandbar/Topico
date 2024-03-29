import fetch from "node-fetch"
import {IP} from './IP'

/* 
    sendPost function POSTs to the server.
    Data is in formInput.data, path is in formInput.url.
    Returns a Promise that resolves to the parsed JSON object.
*/

export const sendPost = async (formInput) => new Promise((resolve, reject) => {
    fetch(IP + formInput.url, { // POSTing to server
        method: "POST",
        body: JSON.stringify(formInput.data),
        headers: {"Content-Type": "application/json"},
        credentials: 'include',
    })
    .then(res => res.json())
    .then(resJson => {
    return resolve(JSON.parse(resJson))
    })
})