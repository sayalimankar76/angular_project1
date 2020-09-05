const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB_CONFIG = {
    host: "localhost",
    user: "root",
    password: "",
    database: "project",
};

let addUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql =
        "INSERT INTO USER (USERNAME, EMAIL, MOBILE, PASSWORD, CONFIRMPASSWORD) VALUES (?, ?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.username,
        input.email,
        input.mobile,
        input.password,
        input.passwordagain,
    ]);

    await connection.endAsync();
};

let authenticateUser = async (input) => {
    const connection = mysql.createConnection(DB_CONFIG);
    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE USERNAME=? AND PASSWORD=?";
    const results = await connection.queryAsync(sql, [
        input.username,
        input.password,
    ]);

    await connection.endAsync();

    if (results.length === 0) {
        throw new Error("Invalid Credentials");
    }
};

module.exports = { addUser, authenticateUser };