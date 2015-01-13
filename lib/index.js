var program = require('commander');
var path = require('path');
var version = require('../package.json').version;
var title = require('../package.json').name;
var wikimark = require('./wikimark');
var target;

/**
 * Process Title
 */
process.title = title;

program
  .version(version)
  .usage('[options] <file or directory>')
  .option('-p, --peppers', 'Add peppers')
  .option('-c, --css', 'Fetch fresh Github CSS file from Github')
  .parse(process.argv);

// Fetch latest Github CSS & exit
if (program.css) {
  wikimark.getCSS();
  process.exit();
}

if (program.args.length) {
  target = path.resolve(program.args.shift());
}

if (!target) {
  console.error('Need a target file or directory');
  process.exit(1);
}

wikimark.init(target);