const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"3tf_11"
});

async function baza(params) {
    try {
        await db.execute("select 1");
        console.log("połączenie ok");
        // -------------------------------------
        const result_ins = await db.execute(`insert into klient(imie, nazwisko) values
            ('Kazimierz', 'Krzywy')
        `);
        console.log("inserted ok", result_ins);
        // -------------------------------------
        const result_upd = db.execute(`update klient set imie = 'piotrek' where nazwisko='Krzywy'`);
        // -------------------------------------
        const result_del = db.execute(`delete from klient where nazwisko='Krzywy'`);
        // -------------------------------------
        const result = await db.execute("select * from klient"); 
        console.log(result, "\n-----------------------");
        console.table(result[0]);



    } catch (error) {
        console.log("Błąd: ",error.message);
    } finally{
        await db.end();
        console.log("zamknięto połączenie");
    }
}

baza();