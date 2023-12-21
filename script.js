var btn = document.getElementById("btn");
var light = document.getElementById("light");
console.log(btn);

function toggleBtn(){
    btn.classList.toggle("active");
    light.classList.toggle("on");
}