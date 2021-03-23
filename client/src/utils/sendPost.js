import fetch from "node-fetch"

export const sendPost = async (formInput) => new Promise((resolve, reject) => {
    fetch("http://localhost:3000" + formInput.url, {
        method: "POST",
        body: JSON.stringify(formInput.data),
        headers: {"Content-Type": "application/json"},
    })
    .then(res => res.json())
    .then(resJson => {
    console.log(JSON.parse(resJson))
    return resolve(JSON.parse(resJson))
    })
})