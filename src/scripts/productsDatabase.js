$(function () {
	//Base de datos de fotografía de productos
	$('#botin09').click(function() {$('.product').css({display: 'block'}); $('.gallery').css({display: 'block'}); $('#desktopView').attr('srcset', 'img/botin09-1.jpg'); $('#tabletView').attr('srcset', 'img/botin09-1.jpg'); $('#mobileView').attr('src', 'img/botin09-1.jpg'); $('#desktopView2').attr('srcset', 'img/botin09-2.jpg'); $('#tabletView2').attr('srcset', 'img/botin09-2.jpg'); $('#mobileView2').attr('src', 'img/botin09-2.jpg'); $('#desktopView3').attr('srcset', 'img/botin09.jpg'); $('#tabletView3').attr('srcset', 'img/botin09.jpg'); $('#mobileView3').attr('src', 'img/botin09.jpg'); $('.product-images-item-info-material').text('Material: Cuero'); $('.product-images-item-info-price').text('Botin 550NE'); $('.product-description-paragraf').text();$('#selector1').click();});
	//Ocultar la clase product al dar click en la X
	$('#closeButton').click(function() {
		$('.product').css({
			display: 'none'
		});
	});
}())