var Feed = require('rss-to-json');

module.exports = async ()=> {
var data = await Feed.load('https://www.brainyquote.com/link/quotebr.rss'),
random = Math.floor(Math.random() * data.items.length);
return {
    name : data.items[random].title,
    quote : data.items[random].description
}
}