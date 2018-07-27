'use strict';

const mysql = require('mysql');

class DBHelper {

    constructor(){
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
            password: '1234',
            port: '3306',
            database: 'literature'
        });
    }

    /*
    * 执行sql ,参数为 sql 语句，成功回掉函数，失败回掉函数
    * 成功回掉函数 接收 results 和 queryfields 两个参数
    * 失败回掉函数 接收 queryerror 一个参数
    */
    executeSql(sql, success, fail) {
        this.pool.getConnection( (error, connection) => {
            
            if(error) throw error;

            connection.query(sql, (queryerror, results, queryfields) => {
                if(queryerror) {
                    fail(queryerror);
                }
                else {
                    success(results, queryfields);
                }
                connection.release();
            });

        } );
    }


    


}

let dbHelper = new DBHelper();
module.exports = dbHelper ;