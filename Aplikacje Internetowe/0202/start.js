import {fakerPL} from '@faker-js/faker';
import mysql from 'mysql2/promise';

const conn = await mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "3tf_100"
});

let query = `
    create table if not exists osoby(
        id int primary key auto_increment,
        firstName varchar(50),
        lastName varchar(50),
        email varchar(70),
        phone varchar(15)
    )
`;
await conn.query(query)

query = `
    insert into osoby(firstName, lastName, email, phone) values(?, ?, ?, ?)
`;


await conn.end();