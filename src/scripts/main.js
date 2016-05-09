(function menuAppear() {
var buttonNav = document.getElementById("buttonNav");
var menuShow = document.getElementById("menuShow");

buttonNav.addEventListener("click", onClickMenu);

function onClickMenu () {
	menuShow.classList.toggle("header-nav-list--show");
}
}())