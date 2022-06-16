$('document').ready(function () {
  $('#add_item').click(() => {
    $('ul').append('<li>Item</li>');
  });
  $('#remove_item').click(() => {
    $('ul').children().last().remove();
  });
  $('#clear_list').click(() => {
    $('ul').empty();
  });
});
