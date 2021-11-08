const hamburgerBtn = document.querySelector(".navbar__menu");
const menuTip = document.querySelector(".navbar__menu-tip");

hamburgerBtn.addEventListener("click",function(){
    if(menuTip.style.display == ""){return menuTip.style.display="flex"}
    else if(menuTip.style.display == "flex"){return menuTip.style.display=""}
});
