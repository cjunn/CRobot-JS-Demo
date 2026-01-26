
const TestSQLite = () => {
    let sqlite = openSQLite(Attach.getPath("students.db"));
    sqlite.execSQL(`CREATE TABLE IF NOT EXISTS Students (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER,
        grade TEXT
    );`);
    sqlite.insert("insert into Students (name, age, grade) values ('张三', 18, 'A')");
    let line = sqlite.queryList("SELECT * FROM Students");
    console.log(line);
  
    // console.log(sqlite.query("select * from user where id=1"));
    // console.log(sqlite.query("select * from user where id=1 and name='张三'"));
    // console.log(sqlite.query("select * from user where id=1 or name='张三'"));
    // console.log(sqlite.query("select * from user where id>1"));

}

export {
    TestSQLite
}
