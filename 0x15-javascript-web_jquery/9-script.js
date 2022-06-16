$('document').ready(function () {
  const request = require('request');
  const options = {
    url: 'https://fourtonfish.com/hellosalut/?lang=fr',
    method: 'GET'
  };

  request(options, function (response) {
    $('#hello').text(response.hello);
  });
});
