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
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

			ga('create', 'UA-79744708-1', 'auto');
			ga('send', 'pageview');
	//Cambiar imágenes de home al hacer hover
	$('#woman-img').hover(function() {
		/* Stuff to do when the mouse enters the element */
		$('#woman-img').find('source').attr('srcset', 'img/logocopain.png');
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$('#woman-img').find('source').attr('srcset', 'img/hombre.jpg');
	});
}())