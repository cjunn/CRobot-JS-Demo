
const TestSQLite = () => {
    console.log("==========测试SQLite===========");
    let sqlite = openSQLite(Attach.getPath("students.db"));
    sqlite.execSQL(`DROP TABLE IF EXISTS Students;`);
    sqlite.execSQL(`CREATE TABLE Students (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER,
        grade TEXT
    );`);
    sqlite.insert("insert into Students (name, age, grade) values ('张三', 18, 'A')");
    sqlite.insert("insert into Students (name, age, grade) values ('李四', 19, 'B')");
    let line = sqlite.queryList("SELECT * FROM Students");
    console.log(`SQLite查询结:${JSON.stringify(line)}`);
}

export {
    TestSQLite
}
