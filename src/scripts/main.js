(function () {
var buttonNav = document.getElementById("buttonNav");
var menuShow = document.getElementById("menuShow");
var buttonNavT = document.getElementById("buttonNavT");
var menuFixed = document.getElementById("menuFixed");
var menuInt = document.getElementById("menuInt");
var itemClick = document.getElementById("itemClick");
var itemClick2 = document.getElementById("itemClick2");

buttonNav.addEventListener("click", onClickMenu);
buttonNavT.addEventListener("click", onClickMenu);
itemClick.addEventListener("click", onMenuInt);
itemClick2.addEventListener("click", onMenuInt2);

function onClickMenu () {
	menuShow.classList.toggle("header-nav-list--show");
}
function onMenuInt () {
	menuInt.classList.toggle("header-nav-list-item-subnav-show");
}
function onMenuInt2 () {
	menuInt2.classList.toggle("header-nav-list-item-subnav2-show");
}

if($(window).width() < 800) {
	$(window).scroll(function(event) {
	    var y = $(this).scrollTop();
	    if (y >= 140) {
	        $(menuFixed).addClass('header-interaction-mobile--light');
	        $(".header-nav").addClass("fixed");
	        $(buttonNav).attr("src", "img/menu-.png");
	        $("#finder").attr("src", "img/lupa-.png");
	    
	    } 
	    else {
	        $(menuFixed).removeClass('header-interaction-mobile--light');
	        $(".header-nav").removeClass("fixed");
	        $(buttonNav).attr("src", "img/menu+.png");
	        $("#finder").attr("src", "img/lupa+.png");
			}
	});
}
}())