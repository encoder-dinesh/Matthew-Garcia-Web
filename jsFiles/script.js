let zerobtn = document.getElementById("zero");
let closebtn = document.getElementById("close");
let itemBox = document.getElementById("itemBox");
let items = document.querySelector(".items")

let menu = document.getElementById("menuText");
let closeIcon = document.querySelector(".closeIconFor");
let mainBox = document.querySelector(".mainNavBox")


zerobtn.addEventListener("click", () => {
    console.log("clicked....");
    itemBox.classList.remove("displayNone");
    itemBox.classList.add("displayBlock");
    itemBox.classList.add("translate");
    items.classList.add("translate-items")
})

closebtn.addEventListener("click", () => {
    console.log("close...");
    itemBox.classList.remove("displayBlock");
    itemBox.classList.add("displayNone");
    itemBox.classList.remove("translate");
    items.classList.remove("translate-items")
})

menu.addEventListener("click", () => {
    mainBox.classList.remove("closeIconClass");
    mainBox.classList.add("fullScreenClass")
})

closeIcon.addEventListener("click", () => {
    mainBox.classList.remove("fullScreenClass")
    mainBox.classList.add("closeIconClass");
    console.log("here");
})
