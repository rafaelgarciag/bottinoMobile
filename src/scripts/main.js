(function () {
var buttonNav = document.getElementById("buttonNav");
var menuShow = document.getElementById("menuShow");
var buttonNavT = document.getElementById("buttonNavT");
var menuFixed = document.getElementById("menuFixed");

buttonNav.addEventListener("click", onClickMenu);
buttonNavT.addEventListener("click", onClickMenu);
menuFixed.addEventListener("scroll", onScroll);

function onClickMenu () {
	menuShow.classList.toggle("header-nav-list--show");
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