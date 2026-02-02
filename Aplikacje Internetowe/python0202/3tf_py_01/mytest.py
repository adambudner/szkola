import sqlite3 as sql
from faker import Faker

fake = Faker("pl_PL")
conn = sql.connect("../baza1.db")
cursor = conn.cursor()

qry = """ create table if not exists uczniowie(
    id integer primary key autoincrement,
    name text,
    email text,
    city text
)"""
cursor.execute(qry)

qry = "insert into uczniowie(name, email, city) values(?, ?, ?)"
for _ in range(5000):
    cursor.execute(qry, (fake.name(), fake.email(), fake.city()))
conn.commit()

record_set = cursor.execute("select * from uczniowie")
for record in record_set:
    if record[3] == "Gorzów Wielkopolski":
        print(record)
conn.close()