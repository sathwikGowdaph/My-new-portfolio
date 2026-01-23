const toggle=document.getElementById("themeToggle")
toggle.onclick=()=>{document.body.classList.toggle("dark-mode")}

new Typed("#typed-name",{
strings:["Sathwik Gowda P H","Frontend Developer","UI/UX Designer"],
typeSpeed:70,
backSpeed:40,
loop:true
})

const bars=document.querySelectorAll(".chart-bar-fill")
window.addEventListener("scroll",()=>{
bars.forEach(bar=>{bar.style.width=bar.style.getPropertyValue("--width")})
})
