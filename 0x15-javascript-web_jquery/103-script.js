function translate () {
  const v = $('#language_code').val();
  $.getJSON('https://fourtonfish.com/hellosalut/?lang=' + v, (data) => {
    $('#hello').html(data.hello);
  });
}

$(function () {
  $('#btn_translate').click(translate);
});

$(function () {
  $('#language_code').keypress(function (e) {
    if (e.which === 13) {
      translate();
      return false;
    }
  });
});
