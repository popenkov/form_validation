/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RU (Russian; русский язык)
 */
$.extend( $.validator.messages, {
	required: "Это поле необходимо заполнить.",
	remote: "Пожалуйста, введите правильное значение.",
	email: "Пожалуйста, введите корректный адрес электронной почты.",
	url: "Пожалуйста, введите корректный URL.",
	date: "Пожалуйста, введите корректную дату.",
	dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
	number: "Пожалуйста, введите число.",
	digits: "Пожалуйста, вводите только цифры.",
	creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
	equalTo: "Пожалуйста, введите такое же значение ещё раз.",
	extension: "Пожалуйста, выберите файл с правильным расширением.",
	maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
	minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
	rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
	range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
	max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
	min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
} );

$.validator.addMethod("email", function(value, element) {
  return this.optional(element) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, "Пожалуйста, введите корректный адрес электронной почты.");

$.validator.addMethod("js-input-phone", function(value, element) {
  return this.optional(element) || $(element).inputmask('unmaskedvalue').length === 10;
}, "Введите корректный телефон.");

$('form').validate({
  errorPlacement: function(error, element) {
    $(element).parent().append(error);
  },
  errorElement: 'span',
  highlight: function(element, errorClass) {
    $(element).parent().addClass(errorClass);
  },
  unhighlight: function(element, errorClass) {
    $(element).parent().removeClass(errorClass);
  },
  submitHandler: function(form) {
    alert('Форма отправлена!');
  }
})

$('.js-input-name').on('input', function() {
  var value = $(this).val();
  value = value.replace(/[^A-Za-zА-Яа-яЁё\s\-]/ig, '');
  $(this).val(value);
});

$('.js-input-phone').inputmask('+7 (999) 999-99-99');
