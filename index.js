var phantom = require('phantom');

var Scraper = function (options) {
	this.debug 		= options.debug || true;
	this.sitepage 	= null;
	this.phInstance = null;
	this.url    	= options.url || "https://en.wikipedia.org/wiki/Web_scraping";
	this.parser 	= options.parser || function(){
		return sitepage.property('content');
	};
};

Scraper.prototype.exec = function(callback){
	if(this.debug){
		console.log("exec");
	}
	phantom.create()
		.then(instance => {
			if(this.debug){
				console.log("Create");
			}
			this.phInstance = instance;
			return instance.createPage();
		})
		.then(page => {
			if(this.debug){
				console.log("createPage");
			}
			this.sitepage = page;
			return page.open(this.url);
		})
		.then(status => {
			if(this.debug){
				console.log(status);
			}
			return this.sitepage.evaluate(this.parser);
		})
		.then(content => {
			if(this.debug){
				console.log(content);
			}
			callback(content);
			this.sitepage.close();
			this.phInstance.exit();
		})
		.catch(error => {
			if(this.debug){
				console.log(error);
			}
			this.phInstance.exit();
		});
}


module.exports = Scraper;