$(function () {
	//Base de datos de fotografía de productos
	$('#032').click(function() {
		$('.product').css({
			display: 'block'
		});
		$('.gallery').css({
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
		$('.gallery').css({
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
	//Cambiar las fotos de la galería con el click
	$('#selector1').click(function() {
		$('.gallery-images-item').fadeOut('slow', function() {	
			$('#itemView1').css({
				display: 'block'
			});
			$('#itemView2').css({
				display: 'none'
			});
			$('#itemView3').css({
				display: 'none'
			});
			$('#itemView4').css({
				display: 'none'
			});
		}).fadeIn('slow');
	});
	$('#selector2').click(function() {
		$('.gallery-images-item').fadeOut('slow', function() {	
			$('#itemView1').css({
				display: 'none'
			});
			$('#itemView2').css({
				display: 'block'
			});
			$('#itemView3').css({
				display: 'none'
			});
			$('#itemView4').css({
				display: 'none'
			});
		}).fadeIn('slow');
	});
	$('#selector3').click(function() {
		$('.gallery-images-item').fadeOut('slow', function() {	
			$('#itemView1').css({
				display: 'none'
			})
			$('#itemView2').css({
				display: 'none'
			});
			$('#itemView3').css({
				display: 'block'
			});
			$('#itemView4').css({
				display: 'none'
			});
		}).fadeIn('slow');
	});
	$('#selector4').click(function() {
		$('.gallery-images-item').fadeOut('slow', function() {	
			$('#itemView1').css({
				display: 'none'
			});
			$('#itemView2').css({
				display: 'none'
			});
			$('#itemView3').css({
				display: 'none'
			});
			$('#itemView4').css({
				display: 'block'
			});
		}).fadeIn('slow');	
	});
}())
