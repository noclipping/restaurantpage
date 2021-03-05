let spaghetti = document.createElement("img");
spaghetti.src="https://images.unsplash.com/photo-1591154405747-5ee97d563988?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80" 
spaghetti.classList.add("spaghetti")

let spaghettiTitle = document.createElement("p")
spaghettiTitle.textContent = "Spaghetti $22.50"

let paragraph = document.createElement("p")
paragraph.textContent = "Our classic ...secret... Spaghetti recipe. Also our only menu item!?"

let menuInit = () => {

    let content = document.createElement("div")
    content.classList.add("content")
    spaghettiTitle.classList.add("spaghettiTitle")
    paragraph.classList.add("menuPara")
    document.body.appendChild(content);
    console.log("menuInit")
    content.appendChild(spaghetti);
    content.appendChild(spaghettiTitle);
    content.appendChild(paragraph);
}
export default menuInit