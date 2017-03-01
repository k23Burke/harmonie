// run like '...$ npm run seed -- --file=./seeding/defaultData.js '
require('babel-register');
var chalk = require('chalk');
var path = require('path');

var fileArg = process.argv.splice(2,process.argv.length)[0];
var file = path.resolve(__dirname, fileArg.split('=')[1].split('\/')[2]);



console.log(chalk.white('Seeding file: ', file))
require(file);