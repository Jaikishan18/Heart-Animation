const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove",(event)=>{
    
    let spanEl = document.createElement("span")
    bodyEl.appendChild(spanEl)
    const xpos = event.offsetX
    const ypos = event.offsetY
    spanEl.style.left = xpos + "px";
    spanEl.style.top = ypos + "px";
    const size = Math.random()*100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    setInterval(()=>{
        spanEl.remove()
    },5000)
})