import fs from 'fs'
import path from 'path';

const serverOptions = {
    key: fs.readFileSync(path.resolve(__dirname, 'cert/key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert/cert.pem'))
}


export default serverOptions