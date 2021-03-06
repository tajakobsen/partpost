var thymeleaf = __non_webpack_require__('/lib/thymeleaf');

var view = resolve('myform.html');

var handleRequest = function (req) {
  return {
    body: thymeleaf.render(view, {
      title: "MyForm with " + req.method
    })
  }
};

exports.get = handleRequest;
exports.post = handleRequest;
exports.all = handleRequest;