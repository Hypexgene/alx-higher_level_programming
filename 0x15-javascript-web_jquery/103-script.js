// GET "Hello" from URL in different languages using jQuery API
// for INPUT#btn_translate (click) or INPUT#language_code (ENTER)
// Language code: INPUT#language_code (ex: es, fr, en etc.),
// Translation GET: click or ENTER (ex: es, fr, en etc.),
// Translation REQ: user clicks or presses ENTER
// Translation RES: DIV#hello >> "Hello"

$('document').ready(function () {
  $('INPUT#btn_translate').click(translate);
  $('INPUT#language_code').focus(function () {
    $(this).keydown(function (e) {
      if (e.keyCode === 13) {
        translate();
      }
    });
  });
});

function translate () {
  const url = 'https://www.fourtonfish.com/hellosalut/hello/';
  $.get(url + $.param({ lang: $('INPUT#language_code').val() }), function (data) {
    $('DIV#hello').html(data.hello);
  });
}

