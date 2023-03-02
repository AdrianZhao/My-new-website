'use strict';
/*
  JavaScript Basics
  Yuhan Zhao
*/

const anim = document.querySelector('.text .click-btn');
            
anim.addEventListener('click', function() {             
  document.querySelector('.red').classList.toggle('red-expand');
  document.querySelector('.green').classList.toggle('green-expand');
  document.querySelector('.yellow').classList.toggle('yellow-expand');
  document.querySelector('.blue').classList.toggle('blue-expand');
})

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}