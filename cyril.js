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

const talent1 = [
    "manyakis",
    "uwagan",
    "kiatan",
];

const name = [
    "ryan",
    "Ryan",
]

const randomtalent = (talent) => talent[Math.floor(Math.random()*talent.length)];
const randomtalent1 = (talent1) => talent1[Math.floor(Math.random()*talent1.length)];

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
    const node1 = document.createTextNode(`${input.value}, ${randomtalent1(talent1)}!`);    
    
    // if(input.value === name[]) {
    //     par.appendChild(node1);
    //     div1.appendChild(par);
    //     rem = div.appendChild(div1);
    //     input.value = "";
    // }
    
    if(input.value.length >0) {
        par.appendChild(node);
        div1.appendChild(par);
        rem = div.appendChild(div1);
        input.value = "";
    }
 })