
/*--------------toggle light-darkmode--------------*/
var btn = document.getElementById("btn");
var light= document.getElementById("body");
var container = document.getElementById("container");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var list3 = document.getElementById("list3");
var list4 = document.getElementById("list4");
var list5 = document.getElementById("list5");
var all = document.getElementById("about-content");
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
    all.classList.toggle("white-font");
}
/*--------------about section-----(tabs on click)------------*/
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
/*-------------------Image changer---------------------*/
function newImage(){
    document.getElementById("image1").src = "Images/portrait1.jpg";
}
function oldImage(){
    document.getElementById("image1").src = "Images/portrait3.jpg";
}

/*-------------------members slider---------------------*/
const slideContainers = [...document.querySelectorAll('.slide-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

slideContainers.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
    
})

/*--------------side-menu---------------------*/
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}