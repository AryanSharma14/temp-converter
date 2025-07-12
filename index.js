$(".celsius-input").on("input", function () {
  const celsiusValue = parseFloat($(this).val());
  const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
  const kelvinValue = celsiusValue + 273.15;

  $(".fahrenheit-input").val(fahrenheitValue.toFixed(2));
  $(".kelvin-input").val(kelvinValue.toFixed(2));

});



$(".fahrenheit-input").on("input", function () {
  const f = parseFloat($(this).val());
  const c = (f - 32) * 5 / 9;
  const k = c + 273.15;

  $(".celsius-input").val(c.toFixed(2));
  $(".kelvin-input").val(k.toFixed(2));

});


$(".kelvin-input").on("input", function () {
  const k = parseFloat($(this).val());
  const c = k - 273.15;
  const f = (c * 9 / 5) + 32;

  $(".celsius-input").val(c.toFixed(2));
  $(".fahrenheit-input").val(f.toFixed(2));

});




