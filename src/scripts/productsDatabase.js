$(function () {
	//Base de datos de fotografía de productos
		$('#032').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/mujer.png'); $('#tabletView').attr('srcset', 'img/mujer.png'); $('#mobileView').attr('src', 'img/carro-.png'); $('#desktopView2').attr('srcset', 'img/030.png'); $('#tabletView2').attr('srcset', 'img/logocopain.png'); $('#mobileView2').attr('src', 'img/logocopain.png'); $('#desktopView3').attr('srcset', 'img/026.png'); $('#tabletView3').attr('srcset', 'img/logocopain.png'); $('#mobileView3').attr('src', 'img/027.png'); $('.product-images-item-info-material').text('some text'); $('.product-images-item-info-price').text('$200.000'); $('.product-description-paragraf').text();});
		$('#030').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/030.png'); $('#tabletView').attr('srcset', 'img/mujer.png'); $('#mobileView').attr('src', 'img/carro-.png'); $('#desktopView2').attr('srcset', 'img/mujer.png'); $('#tabletView2').attr('srcset', 'img/logocopain.png'); $('#mobileView2').attr('src', 'img/logocopain.png'); $('#desktopView3').attr('srcset', 'img/030.png'); $('#tabletView3').attr('srcset', 'img/logocopain.png'); $('#mobileView3').attr('src', 'img/027.png'); $('.product-images-item-info-material').text('Un zapato zapatón'); $('.product-images-item-info-price').text('$1.000.000'); $('.product-description-paragraf').text('Esta es una descripción ficty');});
	//Ocultar la clase product al dar click en la X
	$('#closeButton').click(function() {
		$('.product').css({
			display: 'none'
		});
	});
	//Cambiar las fotos de la galería con el click
	$('#selector1').click(function() {
		$('.gallery-images-item').fadeOut('fast', function() {	
			$('#itemView1').css({
				display: 'block'
			});
			$('#itemView2').css({
				display: 'none'
			});
			$('#itemView3').css({
				display: 'none'
			});
		}).fadeIn('fast');
	});
	$('#selector2').click(function() {
		$('.gallery-images-item').fadeOut('fast', function() {	
			$('#itemView1').css({
				display: 'none'
			});
			$('#itemView2').css({
				display: 'block'
			});
			$('#itemView3').css({
				display: 'none'
			});
		}).fadeIn('fast');
	});
	$('#selector3').click(function() {
		$('.gallery-images-item').fadeOut('fast', function() {	
			$('#itemView1').css({
				display: 'none'
			})
			$('#itemView2').css({
				display: 'none'
			});
			$('#itemView3').css({
				display: 'block'
			});
		}).fadeIn('fast');
	});
}())
