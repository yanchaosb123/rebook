
'use strict';

const Router = require('./router.js');


class Config {

    constructor(){
    }

    setRouters ( app ) {
        Router.setRouters(app);
    }

    doConfig(APP) {
        console.log(module.filename);
        this.setRouters(APP);
    }
}

module.exports = Config;