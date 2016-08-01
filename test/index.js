var assert = require('assert'),
    Scraping = require('..');

var scraping = new Scraping({
	debug : true,
	url   : "https://en.wikipedia.org/wiki/Web_scraping",
	parser: function(){
		return $("#firstHeading").html();
	}
});

describe('web-scraping', function() {
  it('Web scraping', function(done) {
  	this.timeout(0);
  	console.log("start");
  	scraping.exec(function(content){
  		console.log(content);
	    assert.equal(content, 'Web scraping');
	    done();
  	});
  });
});

