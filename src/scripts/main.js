(function menuAppear() {
var buttonNav = document.getElementById("buttonNav");
var menuShow = document.getElementById("menuShow");
var buttonNavT = document.getElementById("buttonNavT");

buttonNav.addEventListener("click", onClickMenu);
buttonNavT.addEventListener("click", onClickMenu);

function onClickMenu () {
	menuShow.classList.toggle("header-nav-list--show");
}
}())