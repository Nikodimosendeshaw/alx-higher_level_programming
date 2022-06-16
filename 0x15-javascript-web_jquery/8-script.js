$('document').ready(function () {
  const request = require('request');
  const options = {
    url: 'https://swapi.co/api/films/?format=json',
    method: 'GET'
  };

  request(options, function (response) {
    for (const value of response.results) {
      const item = $('<li></li>').text(value.title);
      $('#list_movies').append(item);
    }
  });
});
