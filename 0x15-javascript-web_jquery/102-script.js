$('document').ready(function () {
  $('#btn_translate').click(() => {
    const lc = $('#language_code').val();
    const request = require('request');
    const options = {
      url: 'https://fourtonfish.com/hellosalut/?lang=' + lc,
      method: 'GET'
    };
    request(options, function (response) {
      $('#hello').text(response.hello);
    });
  });
});
