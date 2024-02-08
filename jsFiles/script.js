let zerobtn = document.getElementById("zero");
let closebtn = document.getElementById("close");
let itemBox = document.getElementById("itemBox");
let items = document.querySelector(".items")

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