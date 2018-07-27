'use strict';

const bodyParser = require('body-parser');
const HeadersModule = require('./headers.js');

const bookCategoryCtl = require('../bussiness/bookCategoryCtl.js');
const testCtl = require('../bussiness/TestCtl.js');



class Router  {

        constructor() {
            this.headers = HeadersModule.headers;
            this.setHeaders = this.setHeaders.bind(this);
            this.setRouters = this.setRouters.bind(this);
        }

        setRouters (app) {
            
            app.all('*', this.setHeaders );
           // app.use(bodyParser.urlencoded( { extended: false } ));
            app.use(bodyParser.json());
             
            // 应该是此处将bookCategoryCtl.handler 这个方法作为回掉，但并没有传入 bookCategoryCtl 这个对象,因此this undefined
            app.post('/bookCategory', bookCategoryCtl.handler);
            app.all('/test',testCtl.handler);

        }


        setHeaders(req, res,next){
            this.headers.forEach(element => {
                if (element.name && element.value) {
                    res.header(element.name, element.value);
                }
            });
            next();
        }

}
const router = new Router();
module.exports = router;