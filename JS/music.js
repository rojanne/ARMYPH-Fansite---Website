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