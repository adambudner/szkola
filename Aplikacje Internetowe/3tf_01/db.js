const mysql = require('mysql2');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: '3tf_0121',
});

const query = "select now() as czas, id, imie, nazwisko from parcownicy ";

const tab = [];
conn.query(query , (err, results) => {
    if (err){throw err;}
    console.log((results[0].czas).toString());
    results.forEach(row => {
        tab.push(row);
    });
    console.table(tab);
});

conn.end();