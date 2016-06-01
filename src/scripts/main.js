$(function () {
	$("body").click(function () {
		$("#menuShow").removeClass("header-nav-list--show");
		$("#productsList").removeClass("header-nav-list-item-subnav-show");
		$("#companyList").removeClass("header-nav-list-item-subnav2-show");
	});

	$("#buttonNav").click(function (event) {
		event.stopPropagation();
		$("#menuShow").toggleClass("header-nav-list--show");
		$("#productsList").removeClass("header-nav-list-item-subnav-show");
		$("#companyList").removeClass("header-nav-list-item-subnav2-show");
	});

	$("#productNav").click(function (event) {
		event.stopPropagation();
		$("#productsList").toggleClass("header-nav-list-item-subnav-show");
	});
	
	$("#aboutNav").click(function (event) {
		event.stopPropagation();
		$("#companyList").toggleClass("header-nav-list-item-subnav2-show");
	});

	$('#findBox')
	.find('form')
	.submit(function(ev) {
		ev.preventDefault();
		var search = $(this)
		.find('input[type="text"]')
		.val();
		$('.header-interaction-mobile-choice-finder-box').focus();
	})

	if($(window).width() > 550 && $(window).width() < 1200) {
		var width = $(window).width();
		$(window).resize(function() {
			if($(this).width() != width) {
				width = $(this).width();
				location.reload();
			}
		});	
	}

	if($(window).width() < 768) {
		$(window).scroll(function(event) {
		    var y = $(this).scrollTop();
		    if (y >= 140) {
		        $("#menuFixed").addClass('header-interaction-mobile--light');
		        $(".header-nav").addClass("fixed");
		        $("#menuButton").attr("src", "img/menu-.png");
		        $("#finder").attr("src", "img/lupa-.png");
		    
		    } 
		    else {
		        $("#menuFixed").removeClass('header-interaction-mobile--light');
		        $(".header-nav").removeClass("fixed");
		        $("#menuButton").attr("src", "img/menu+.png");
		        $("#finder").attr("src", "img/lupa+.png");
				}
		});
	}
	if($(window).width() > 768) {
		$(".content").find(".loader").remove();
	}
}())