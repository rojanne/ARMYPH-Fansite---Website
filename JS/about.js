let banner = document.getElementById("banner");
let head = document.getElementById("head");

banner.onmouseover = function(){
    banner.style.width= '100%';
}
banner.onmouseout = function(){
    banner.style.width = '80%';
}
head.onmouseover = function(){
    head.innerHTML = 'Bangtan Seonyeondan';
}
head.onmouseout = function(){
    head.innerHTML = '방탄소년단 / BTS / 防彈少年團';
}



var btn = document.getElementById("btn");
var light= document.getElementById("body");
var container = document.getElementById("container");
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var list3 = document.getElementById("list3");
var list4 = document.getElementById("list4");
var list5 = document.getElementById("list5");
var element = document.getElementById("about-container");

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
    element.classList.toggle("light-mode");
}

/*--------------side-menu---------------------*/
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

