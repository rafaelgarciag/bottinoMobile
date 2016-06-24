$(function () {
	//Ocultar la clase product luego de 5 segundos
	setTimeout(function () {
		$('.product').css({
			display: 'none'
		})
	}, 5000)
	//Base de datos de fotografía de productos
	$('#032').click(function() {
		$('.product').css({
			display: 'block'
		});
		$('#desktopView').attr('srcset', 'img/logocopain.png');
		$('#tabletView').attr('srcset', 'img/mujer.png');
		$('#mobileView').attr('src', 'img/carro-.png');
		$('.product-images-item-info-material').text('some text');
		$('.product-images-item-info-price').text('$200.000');
		$('.product-description-paragraf').text();
	});
	$('#030').click(function() {
		$('.product').css({
			display: 'block'
		});
		$('#desktopView').attr('srcset', 'img/logocopain.png');
		$('#tabletView').attr('srcset', 'img/mujer.png');
		$('#mobileView').attr('src', 'img/carro-.png');
		$('.product-images-item-info-material').text('EL mejor zapato del mundo');
		$('.product-images-item-info-price').text('$1.000.000');
		$('.product-description-paragraf').text();
	});
	//Ocultar la clase product al dar click en la X
	$('#closeButton').click(function() {
		$('.product').css({
			display: 'none'
		});
	});
	// $("body").click(function () {
	// 	$('.product').css({
	// 		display: 'none'
	// 	});
	// });
}())
