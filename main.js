let menu = document.getElementById('menu');
let btnClose = document.getElementById('close');
let header = document.getElementById('header');

menu.onclick = function(){
header.classList.add('hide');
}
btnClose.onclick = function(){
header.classList.remove('hide');

}
let scroll = document.querySelector('.scroll');

window.onscroll = function(){
if(scrollY >= 300){
  scroll.classList.add('open');

}
else {
  scroll.classList.remove('open');

}
}
let search = document.getElementById('search');
let sec = document.getElementById('sec');
let colse = document.getElementById('colse');

search.onclick = function () {
  sec.classList.add('open');
}

colse.onclick = function () {
  sec.classList.remove('open');
}
