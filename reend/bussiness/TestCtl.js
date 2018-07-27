'use strict';

class TestCtl {

	constructor() {
		this.handler = this.handler.bind(this);
	}

	handler(req,res) {
		res.redirect('/test.html');
	}
}


const testCtl = new TestCtl();
module.exports = testCtl;