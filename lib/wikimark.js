var fs = require('./fs');
var css = require('./css');

function init() {
  fs.ensure();
}

function getCSS() {
  fs.ensure();
  css(function(err, cssdata) {
    if (err) {
      return console.error(err);
    }

    fs.createCSS(cssdata);
  });
}

module.exports = exports = {
  init: init,
  getCSS: getCSS
};