// GET "Hello" from URL in different languages using jQuery API:
// Language code: INPUT#language_code (ex: es, fr, en etc.),
// Translation GET: INPUT#language_code (ex: es, fr, en etc.),
// Translation REQ: INPUT#btn_translate >> user clicks,
// Translation RES: DIV#hello >> "Hello"

$('document').ready(function () {
  const url = 'https://www.fourtonfish.com/hellosalut/hello/';
  $('INPUT#btn_translate').click(function () {
    $.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
      $('DIV#hello').html(data.hello);
    });
  });
});

