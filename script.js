new Typed("#typed",{
strings:["Creative Designer","Sathwik Gowda P H"],
typeSpeed:70,
backSpeed:40,
loop:true
})

const toggle=document.getElementById("themeToggle")

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode")
toggle.textContent="☀️"
}

toggle.addEventListener("click",()=>{
document.body.classList.toggle("dark-mode")
if(document.body.classList.contains("dark-mode")){
toggle.textContent="☀️"
localStorage.setItem("theme","dark")
}else{
toggle.textContent="🌙"
localStorage.setItem("theme","light")
}
})
