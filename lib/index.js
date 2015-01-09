var program = require('commander');
var path = require('path');
var version = require('../package.json');
var wikimark = require('./wikimark');

require('ofe').call();

program
  .version(version)
  .usage('[options] <file or directory>')
  .option('-p, --peppers', 'Add peppers')
  .option('-c, --css', 'Fetch fresh Github CSS file from Github')
  .parse(process.argv);



if (program.css) {
  wikimark.getCSS();
} else {
  var target = program.args.length && program.args.shift();

  target = path.resolve(target);
  if (!target) {
    console.error('Need a target file or directory');
    process.exit(1);
  }

  wikimark.init();
}