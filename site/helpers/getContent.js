var marked = require('marked')
  , fs     = require('fs')
  , path   = require('path')
  , Handlebars = require('broccoli-taco/node_modules/handlebars');

module.exports = function(section, fileName) {
    var content = fs.readFileSync(path.join('site', section, fileName) + '.md').toString();
    return new Handlebars.SafeString(marked(content));
}
