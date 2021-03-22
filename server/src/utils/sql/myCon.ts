const mysql = require('mysql')

const myCon = mysql.createConnection({
    host: 'localhost',
    user: 'AE2',
    password: '12345679',
    database: 'chatapp'
});

export default myCon