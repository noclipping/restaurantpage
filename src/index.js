import  homeInit from "./home.js"
import menuInit from "./menu.js"
import aboutInit from "./about.js"

let hometab = document.querySelector("[href = '#home']")
let menutab = document.querySelector("[href='#menu']")
let abouttab = document.querySelector("[href = '#about']")
let alltabs = document.querySelectorAll("a")

homeInit();

let removeActives = () =>{
    alltabs.forEach(tab =>{
        tab.classList.remove("active");
    })

    let bodyContent = document.querySelector(".content")
    if(bodyContent){document.body.removeChild(bodyContent)}
}

hometab.addEventListener("click", e=>{
    removeActives();
    homeInit();
    hometab.classList.add("active")
})

menutab.addEventListener("click", e=>{
    removeActives();
    menuInit();
    menutab.classList.add("active")


})

abouttab.addEventListener("click", e=>{
    removeActives();
    aboutInit()
    abouttab.classList.add("active")
})