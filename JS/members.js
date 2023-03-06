var btn = document.getElementById("btn");
var light= document.getElementById("body");
var container = document.getElementById("container");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var list3 = document.getElementById("list3");
var list4 = document.getElementById("list4");
var list5 = document.getElementById("list5");
var please = document.getElementById("heads");
function toggleBtn() {
    btn.classList.toggle("active");
    light.classList.toggle("on");
    container.classList.toggle("font");
    list1.classList.toggle("font");
    list2.classList.toggle("font");
    list3.classList.toggle("font");
    list4.classList.toggle("font");
    list5.classList.toggle("font");
    container.classList.toggle("containerB");
    please.classList.toggle("dark");
}

/*-------------------bias picker-------------------------------*/
var display = document.getElementById("result");
var bTn = document.getElementById("pick");

var choices = [
    {
        "image": "../Images/namjoon1.webp",
        "name": "RM"
    },
    {
        "image": "../Images/jin1.jpg",
        "name": "Jin"
    },
    {
        "image": "../Images/suga3.jpg",
        "name": "Suga"
    },
    {
        "image": "../Images/hobi2.jpg",
        "name": "J-hope"
    },
    {
        "image": "../Images/jimin2.jpg",
        "name": "Jimin"
    },
    {
        "image": "../Images/v5.jpg",
        "name": "V"
    },
    {
        "image": "../Images/jk5.jpg",
        "name": "Jungkook"
    }
]

var number = (Math.floor(Math.random() * 7));
bTn.onclick = () => {
    display.innerHTML =`
        <div class="result-container">
            <div class="result-img">
                <img src="${choices[number].image}" width="250px" height="250px"></img>
            </div>
            <div class="name-result">
                ${choices[number].name}
            </div>
        </div>
            `;
}

/*--------------side-menu---------------------*/
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}