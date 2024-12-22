let elHiddenHeader = document.querySelector(".hidden-header")
let elMenuBtn = document.querySelector(".site-header__menu-btn")
let elMenuImg = document.querySelector(".site-header__menu-img")

// console.log(elHiddenHeader, elMenuBtn, elMenuImg)

elMenuBtn.addEventListener("click", function(){
	elHiddenHeader.classList.toggle("hidden-header--active")

	if(elHiddenHeader.classList.contains("hidden-header--active")){
		elMenuImg.src = "../assets/icons/close.svg"
	} else {
		elMenuImg.src = '../assets/icons/menu.svg'
	}
})