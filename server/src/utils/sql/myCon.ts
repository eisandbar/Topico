import mysql from 'mysql';

const myCon = mysql.createConnection({
    host: 'localhost',
    user: 'AE2',
    password: '12345679',
    database: 'topico'
});

export default myCon