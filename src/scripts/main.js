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
menuFixed.addEventListener("scroll", onScroll);

function onClickMenu () {
	menuShow.classList.toggle("header-nav-list--show");
}
function onMenuInt () {
	menuInt.classList.toggle("header-nav-list-item-subnav-show");
}
function onMenuInt2 () {
	menuInt2.classList.toggle("header-nav-list-item-subnav2-show");
}

//No funciona el script aún 130516
function onScroll () {
	if(window.scrollY > 300)
	{
	alert("funciona");
	//menuFixed.classList.toggle("header-interaction-mobile--light");		
	}
}
onScroll();
}())