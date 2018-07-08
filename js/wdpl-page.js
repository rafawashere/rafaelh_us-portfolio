var prjCrd = document.querySelectorAll(".projectCard");

function addE(evt) {
  evt.addEventListener('mouseenter', function() {
    this.classList.add('active');
  })
  evt.addEventListener('mouseleave', function() {
    this.classList.remove('active');
  })
}

document.querySelector('.controls .desktop').addEventListener('click' function(){

});

function init() {
  for (let i = 0; i < prjCrd.length; i++) {
    addE(prjCrd[i]);
  }
}

window.onload = init;
