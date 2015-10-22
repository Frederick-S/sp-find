var contextHelper = require('sp-context-helper');
var queryString = require('query-string');
var find = require('../index');

var hostWebUrl = queryString.parse(location.search).SPHostUrl;
var contextWrapper = contextHelper(hostWebUrl, true);
var clientContext = contextWrapper.clientContext;
var web = contextWrapper.web;
var webs = web.get_webs();

clientContext.load(webs);
clientContext.executeQueryAsync(function (sender, args) {
    var title = 'SharePoint App SPFind Test';

    var web = find(webs, function (current) {
        return current.get_title() === title;
    });

    if (web !== null) {
        $('#message').html('Found a web called ' + title + '.');
    } else {
        $('#message').html('Can not find a web called ' + title + '.');
    }
}, function (sender, args) {
    alert(args.get_message());
});
