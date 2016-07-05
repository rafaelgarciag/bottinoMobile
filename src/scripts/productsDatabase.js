$(function () {
	//Base de datos de fotografía de productos
		$('#tac01').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/tac01-1.jpg'); $('#tabletView').attr('srcset', 'img/tac01-1.jpg'); $('#mobileView').attr('src', 'img/tac01-1.jpg'); $('#desktopView2').attr('srcset', 'img/tac01-2.jpg'); $('#tabletView2').attr('srcset', 'img/tac01-2.jpg'); $('#mobileView2').attr('src', 'img/tac01-2.jpg'); $('#desktopView3').attr('srcset', 'img/tac01-3.jpg'); $('#tabletView3').attr('srcset', 'img/tac01-3.jpg'); $('#mobileView3').attr('src', 'img/tac01-3.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Tacón 400PR'); $('.product-description-paragraf').text();});
		$('#tac02').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/tac02-1.jpg'); $('#tabletView').attr('srcset', 'img/tac02-1.jpg'); $('#mobileView').attr('src', 'img/tac02-1.jpg'); $('#desktopView2').attr('srcset', 'img/tac02-2.jpg'); $('#tabletView2').attr('srcset', 'img/tac02-2.jpg'); $('#mobileView2').attr('src', 'img/tac02-2.jpg'); $('#desktopView3').attr('srcset', 'img/tac02-3.jpg'); $('#tabletView3').attr('srcset', 'img/tac02-3.jpg'); $('#mobileView3').attr('src', 'img/tac02-3.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Tacón 400PR'); $('.product-description-paragraf').text('Esta es una descripción ficty');});
		$('#tac03').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/tac03-1.jpg'); $('#tabletView').attr('srcset', 'img/tac03-1.jpg'); $('#mobileView').attr('src', 'img/tac03-1.jpg'); $('#desktopView2').attr('srcset', 'img/tac03-2.jpg'); $('#tabletView2').attr('srcset', 'img/tac03-2.jpg'); $('#mobileView2').attr('src', 'img/tac03-2.jpg'); $('#desktopView3').attr('srcset', 'img/tac03.jpg'); $('#tabletView3').attr('srcset', 'img/tac03.jpg'); $('#mobileView3').attr('src', 'img/tac03.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Tacón 400PR'); $('.product-description-paragraf').text('Esta es una descripción ficty de otra prueba más');});
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


// $('#032').click(function() {
// 	$('.product').css({
// 		display: 'block'
// 	}); 
// 	$('.gallery').css({
// 		display: 'block'
// 	}); 
// 	$('#desktopView').attr('srcset', 'img/mujer.png'); 
// 	$('#tabletView').attr('srcset', 'img/mujer.png'); 
// 	$('#mobileView').attr('src', 'img/carro-.png'); 
// 	$('#desktopView2').attr('srcset', 'img/030.png'); 
// 	$('#tabletView2').attr('srcset', 'img/logocopain.png'); 
// 	$('#mobileView2').attr('src', 'img/logocopain.png'); 
// 	$('#desktopView3').attr('srcset', 'img/026.png'); 
// 	$('#tabletView3').attr('srcset', 'img/logocopain.png'); 
// 	$('#mobileView3').attr('src', 'img/027.png'); 
// 	$('.product-images-item-info-material').text('some text'); 
// 	$('.product-images-item-info-price').text('$200.000'); 
// 	$('.product-description-paragraf').text();});