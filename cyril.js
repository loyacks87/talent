const talent = [
    "swimmer",
    "dancer",
    "singer",
    "runner",
    "programmer",
    "boxer",
    "mma fighter",
    "wife or husband",
    "at sex"
];

const randomtalent = (talent) => talent[Math.floor(Math.random()*talent.length)];

const button = document.getElementById("enter");
const input = document.getElementById("insertname");
const div = document.querySelector(".card-body");
let rem = document.querySelector("p");    

button.addEventListener('click', function() {
    if(rem !== null) {
        rem.remove();
    }
    
    const div1 = document.createElement("div");
    div1.className = "card card-body";
    const par = document.createElement("p");
    const node = document.createTextNode(`${input.value}, you are a good ${randomtalent(talent)}!`);        
    if(input.value.length >0) {
        par.appendChild(node);
        div1.appendChild(par);
        rem = div.appendChild(div1);
        input.value = "";
    }
 })