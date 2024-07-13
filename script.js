var menu = document.querySelector('.menu')
var sidebar = document.querySelector('.side-bar')
var container = document.querySelector('.container')

menu.onclick=function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("larg-container")
}
