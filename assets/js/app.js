const Tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");
const tabLine = document.querySelector(".tab-line");
const listItems = document.querySelector(".list-items");
const navItems = document.querySelectorAll(".list-items li a");
const tabContainer = document.querySelector(".tab-container");
const toggleMenu = document.querySelector(".toggle-menu");
const navBar = document.querySelector(".wrapper-header");
// Tab product
Tabs.forEach((tab ,index)=>{
    tab.addEventListener("click",()=>{
        Tabs.forEach((tab)=>{
            tab.classList.remove("active-tab");
            
        })
        tab.classList.add("active-tab");
        contents.forEach((content)=>{
            content.classList.remove("active");
        })
        contents[index].classList.add("active");
    })
})

toggleMenu.addEventListener("click" , ()=>{
    listItems.classList.toggle("list-show");
});

/// fixed-navbar
window.addEventListener("scroll",()=>{
const pageOffset = window.scrollY;
if(pageOffset >=200){
    navBar.classList.add("nav-bar-fixed")
}else{
    navBar.classList.remove("nav-bar-fixed");
}
})