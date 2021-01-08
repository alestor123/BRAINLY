#!/usr/bin/env node

var brain = require('./App'),
chalk = require('chalk'),
figlet = require('figlet');

(async () => {
var data = await brain();
figlet('Todays Quote',(err, tdata) => {
if(err) throw err
console.log(chalk.yellow(tdata))
console.log('\n Name : ' +chalk.yellow(data.name) +  ' \n' + '\n Quote : ' + chalk.green(data.quote) + '\n' )

});
})();
