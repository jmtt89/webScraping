# web-scraping

Node Module for extracting information from websites.

[![build status](https://secure.travis-ci.org/jmtt89/web-scraping.png)](http://travis-ci.org/jmtt89/web-scraping)

## Installation

This module is installed via npm:

``` bash
$ npm install web-scraping
```

## Example Usage

``` js
var Scraping = require('web-scraping');
var scraping = new Scraping({
	debug : true||false,		// Turn on all console messages debug messages
	url   : ... ,				// The URL to Parse
	parser: function(){ ... } 	// Function to parse the HTML of the page loaded in URL 
});

....

function foo(){
	//The Callback function, the parameter is the returned element from parser function
	var callback = function(content){
		console.log(content);
	}

	scraping.exec(callback) //Execute the parsing function over the URL provided
}


```
