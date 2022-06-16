$('document').ready(function () {
  const request = require('request');
  const options = {
    url: 'https://swapi-api.hbtn.io/api/people/5/?format=json',
    method: 'GET'
  };

  request(options, function (response) {
    $('#character').text(response.name);
  });
});
