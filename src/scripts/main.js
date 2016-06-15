$(function () {
	//Click por fuera para esconder Menú
	$("body").click(function () {
		$("#menuShow").removeClass("header-nav-list--show");
		$("#productsList").removeClass("header-nav-list-item-subnav-show");
		$("#companyList").removeClass("header-nav-list-item-subnav2-show");
	});
	//Mostrar el menú al click
	$("#buttonNav").click(function (event) {
		event.stopPropagation();
		$("#menuShow").toggleClass("header-nav-list--show");
		$
		$("#productsList").removeClass("header-nav-list-item-subnav-show");
		$("#companyList").removeClass("header-nav-list-item-subnav2-show");
		$('img', this).toggle();
	});
	//Mostrar el submenú al click
	$("#productNav").click(function (event) {
		event.stopPropagation();
		$("#productsList").toggleClass("header-nav-list-item-subnav-show");
	});
	//Mostrar el submenú al click
	$("#aboutNav").click(function (event) {
		event.stopPropagation();
		$("#companyList").toggleClass("header-nav-list-item-subnav2-show");
	});
	//Realizar la busqueda y colocar cursor al click en la lupa
	$('#findBox')
	.find('form')
	.submit(function(ev) {
		ev.preventDefault();
		var search = $(this)
		.find('input[type="text"]')
		.val();
		$('.header-interaction-mobile-choice-finder-box').focus();
	})

	//Cambiar la disposición de las imágenes dependiendo del tamaño del dispositivo
	if($(window).width() > 550 && $(window).width() < 1200) {
		var width = $(window).width();
		$(window).resize(function() {
			if($(this).width() != width) {
				width = $(this).width();
				location.reload();
			}
		});	
	}
	//Cambiar la barra del menú con scroll dependiendo de la posición en Y
	if($(window).width() < 768) {
		$(window).scroll(function(event) {
		    var y = $(this).scrollTop();
		    if (y >= 140) {
		        $("#menuFixed").addClass('header-interaction-mobile--light');
		        $(".header-nav").addClass("fixed");
		        $("#menuButton").attr("src", "img/menu-.png");
		        $("#menuButton1").attr("src", "img/menu1-.png");
		        $("#finder").attr("src", "img/lupa-.png");
		    
		    } 
		    else {
		        $("#menuFixed").removeClass('header-interaction-mobile--light');
		        $(".header-nav").removeClass("fixed");
		        $("#menuButton").attr("src", "img/menu+.png");
		        $("#menuButton1").attr("src", "img/menu1+.png");
		        $("#finder").attr("src", "img/lupa+.png");
				}
		});
	}
	//Quitar el loader cuando es un dispositivo grande
	if($(window).width() > 768) {
		$(".content").find(".loader").remove();
	}

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
	
}())