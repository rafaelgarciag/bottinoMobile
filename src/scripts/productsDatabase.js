$(function () {
	//Base de datos de fotografía de productos
	
	//Ocultar la clase product al dar click en la X
	$('#closeButton').click(function() {
		$('.product').css({
			display: 'none'
		});
		$('#color1').removeClass();
		$('#color1').text('');
		$('#size1').removeClass();
		$('#size1').text('Producto no disponible. ').append('<a href="servicio.html">Más Info</a>');
		$('#color2').removeClass();
		$('#color2').text('');
		$('#size2').removeClass();
		$('#size2').text('');
		$('#color3').removeClass();
		$('#color3').text('');
		$('#size3').removeClass();
		$('#size3').text('');
		$('#color4').removeClass();
		$('#color4').text('');
		$('#size4').removeClass();
		$('#size4').text('');
	});
}())