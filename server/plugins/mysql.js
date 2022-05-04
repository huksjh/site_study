require("dotenv").config();
const mysql = require("mysql2");

function createDatabase() {
    let instanse = null;
    return {
        getInstanse: function () {
            if (instanse == null) {
                const config = {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    database: process.env.DB_DATABASE,
                    password: process.env.DB_PASSWORD,
                };

                const pool = mysql.createPool(config);
                instanse = pool.promise();
            }
            return instanse;
        },
    };
}

module.exports = createDatabase().getInstanse();
