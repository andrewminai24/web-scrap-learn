const rp = require('require-promise-native');
const cheerio = require('cheerio');
const jsdom = require('jsdom');
const {jsdom} = jsdom;

function google(celebrity){
    let options = {
        method:'G'
        uri:"https://wccusd.follettdestiny.com/common/welcome.jsp",
        headers:{
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
        }
    }


    return new Promise((resolve,reject) => {

    });
},

google().then(res => {

});

//nightmare.js is a library that you use 
//for websites that are built with frameworks
//like react or angular