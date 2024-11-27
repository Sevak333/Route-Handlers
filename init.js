const sqlite = require("better-sqlite3")
const db = new sqlite("users.db")
db.prepare(`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    salary INTEGER
    )
    `).run()


const users = [
    { name: "Bagrat Srbazan", age: 55, salary: 700000 },
    { name: "Anulik Tatoo", age: 21, salary: 120000 },
    { name: "Vardanik", age: 32, salary: 320000 },
    { name: "Vle Rabiz", age: 29, salary: 60000 },
    { name: "Serj", age: 64, salary: 830000 },
    { name: "Dodi Gago", age: 59, salary: 800000 },
    { name: "Hovul", age: 43, salary: 180000 },
    { name: "Timati", age: 37, salary: 745000 },
    { name: "Lfik", age: 60, salary: 130000 }
]

const stm = `INSERT INTO Users(name,age,salary)
    values(@name,@age,@salary)`
    users.forEach(u=> {
        db.prepare(stm).run(u)
    })