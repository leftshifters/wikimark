var githubMarkdownCss = require('generate-github-markdown-css');

function get(cb) {
  console.log('Fetching Github CSS');
  githubMarkdownCss(function(err, css) {
    if (err) return cb(err);
    cb(null, css);
  });
}

module.exports = exports = get;