'use strict';

const dbHelper = require('../util/dbhelper.js');
const style = require('../util/styles.js');
const mysql = require('mysql');

class BookCategoryControl {

    constructor() {
        this.getBookCategory = this.getBookCategory.bind(this);
        this.handler = this.handler.bind(this);
    }

    getBookCategory(req, res) {
        dbHelper.executeSql('select * from book_category where parent = -1 ',
            (results, field) => {
                res.send(results);
            },
            (error) => {
                res.send(error);
            });
    }

    getBookChildCategory(req, res) {
        if( !req.body.parentId ) {
            res.send('no parentId in getBookChildCategory ');
            return ;
        }

        dbHelper.executeSql(mysql.format('select * from book_category where parent = ?', [req.body.parentId]),
            (results, field) => {
                res.send(results);
            },
            (error) => {
                res.send(error);
            });



    }

    handler(req,res) {

       if(!req.body) {
           console.log(style['red'], '发生了异常请求', req);
           return res.sendStatus(404);
       }
 
       console.log(req.body.msg);
       
       switch(req.body.msg) {
           case 'getBookCategory':
                this.getBookCategory(req,res);
                break;
           case 'getBookChildCategory':
                this.getBookChildCategory(req, res);
                break;
           default:
                res.sendStatus(404);
       }
    }




}

const bookCategoryCtl = new BookCategoryControl();

module.exports = bookCategoryCtl;
