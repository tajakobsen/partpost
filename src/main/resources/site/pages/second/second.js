var portal = require('/lib/xp/portal');
var thymeleaf = __non_webpack_require__('/lib/thymeleaf');

var view = resolve('second.html');


var handleRequest = function (req) {
  var content = portal.getContent();

  return {
    body: thymeleaf.render(view, {
      mainRegion: content.page.regions.main,
      title: "Private page with " + req.method
    })
  }
};

exports.get = handleRequest;
exports.post = handleRequest;
exports.all = handleRequest;