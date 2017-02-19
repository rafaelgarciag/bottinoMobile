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
		$("#productsList").removeClass("header-nav-list-item-subnav-show");
		$("#companyList").removeClass("header-nav-list-item-subnav2-show");
		//$('img', this).toggle(); Cambia el botón del menú al click
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
	//No mostrar lso botones de búsqueda ni de carro de compras
	$('.product-images-item-marketcar').css({
		display: 'none'
	});
	$('.category-images-item-marketcar').css({
		display: 'none'
	});
	$('#findBox').css({
		display: 'none'
	});

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
			if (y >= 140) {
				$('#closeButton').css({
					top: '60px'
				});
			}
			else {
				$('#closeButton').css({
					top: '0px'
				});	
			}
		});
	}
	//Quitar el loader cuando es un dispositivo grande
	if($(window).width() > 768) {
		$(".content").find(".loader").remove();
	}
	//Activar el Lazy Loader
	$(function() {
    	$("img").lazyload({placeholder : "img/grey.gif", threshold : 100, effect : "fadeIn"});
	});
	//Script de Google Analytics
	// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	// 		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	// 		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	// 		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	// 		ga('create', 'UA-79744708-1', 'auto');
	// 		ga('send', 'pageview');
	//Cambiar imágenes de home al hacer hover
	$('#man-img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('#man-img').find('source').attr('srcset', 'img/hombres.jpg');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('#man-img').find('source').attr('srcset', 'img/hombre-mobile.jpg');
	});
	$('#woman-img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('#woman-img').find('source').attr('srcset', 'img/mujeres.jpg');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('#woman-img').find('source').attr('srcset', 'img/mujer-mobile.jpg');
	});
	$('#accesories-img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('#accesories-img').find('source').attr('srcset', 'img/bolsos.jpg');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('#accesories-img').find('source').attr('srcset', 'img/bolsos-mobile.jpg');
	});
	// //<!--Start of Zopim Live Chat Script-->
	// 	window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
	// 	d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
	// 	_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
	// 	$.src="//v2.zopim.com/?46wVbzYRkjCvanNyIy6gncgEj9hLreRL";z.t=+new Date;$.
	// 	type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
	// //<!--End of Zopim Live Chat Script-->
}())