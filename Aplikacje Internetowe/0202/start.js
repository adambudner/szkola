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


 
function createPerson(){
    const Person = {
        firstName: fakerPL.person.firstName(),
        lastName: fakerPL.person.lastName(),
        phone: fakerPL.phone.number()
    }

    Person.email = fakerPL.internet.email({ firstName: Person.firstName, lastName: Person.lastName });
    return Person;
}
const people = Array.from({length: 5}, createPerson);
const peopleTabTab = people.map(row => Object.values(row));
query = `
    insert into osoby(firstName, lastName, phone, email) values ?
`;

await conn.query(query, [peopleTabTab]);


await conn.end();