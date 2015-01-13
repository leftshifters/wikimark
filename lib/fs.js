var fs = require('fs.extra');
var path = require('path');

var dotdir = '.wikimark';
var cssfile = 'github-markdown.css';
var homedir = getHome();
var dotpath = path.join(homedir, dotdir);

function ensure() {
  if (!fs.existsSync(dotpath)) {
    console.log('Creating %s', dotpath);
    fs.mkdirp(dotpath);
  }
}

function createCSS(cssdata) {
  ensure();
  var csspath = path.join(dotpath, cssfile);
  fs.writeFileSync(csspath, cssdata);
  console.log('Writing Github css file (%s)', csspath);
}

function walk(target) {

}

function getHome() {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
}

module.exports = exports = {
  ensure: ensure,
  createCSS: createCSS
};