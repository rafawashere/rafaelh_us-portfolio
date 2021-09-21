const id = (id) => {
  return document.getElementById(id);
}

const qs = (val) => {
  return document.querySelector(val);
}

const qsa = (val) => {
  return document.querySelectorAll(val);
}

let pTop = id("panel-container");
let pLeft = id("panel-container");
let currPanel;

function set(w,x) {id(w).innerHTML = "(" + subtract(x,new Date().getFullYear()) + "+)";}

// Subtract
function subtract(a,b) {
  return b-a;
}

// JS Search Params Fallback by David Walsh https://davidwalsh.name/
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

const setSkillDates = () => {
  // Set years of Experience on Resume Skills Tag Name
  //web
  set('html-web',2000);
  set('css-web',2001);
  set('js-web',2011);
  set('jq-web',2014);
  set('ajax-web',2015);
  set('php-web',2010);
  set('mysql-web',2015);
  set('mongodb-web',2018);
  set('btsp-web',2014);
  set('wp-web',2010);
  set('ng-web',2016);
  set('nodejs-web',2018);
  set('api-web',2018);
  set('gas-web',2016);
  set('gsg-web',2013);
  set('dmdns-web',2000);
  set('rwd-web',2012);
  set('ux-ix-web',2012);

  //apps
  set('afd-app',2018);
  set('afp-app',2018);
  set('ps-app',2010);
  set('ai-app',2012);
  set('dw-app',2012);
  set('pp-app',2014);
}

function pullPanel(n) {
  let textColor;

  switch (n) {
    case 1:
      pTop.style.top = 0;
      pLeft.style.left = 0;
      textColor = "light";
      currPanel = 1;
      break;
    case 2:
      pTop.style.top = 0;
      pLeft.style.left = "-100vw";
      textColor = "light";
      setTimeout(() => {
        $('#panel2 .col').addClass("active");
      }, 500);
      setSkillDates();
      currPanel = 2;
      break;
    case 3:
      pTop.style.top = 0;
      pLeft.style.left = "-200vw";
      textColor = "light";
      currPanel = 3;
      break;
    case 4:
      pTop.style.top = "-100vh";
      pLeft.style.left = 0;
      textColor = "light";
      currPanel = 4;
      break;
    case 5:
      pTop.style.top = "-100vh";
      pLeft.style.left = "-100vw";
      textColor = "dark";
      currPanel = 5;
      break;
    case 6:
      pTop.style.top = "-100vh";
      pLeft.style.left = "-200vw";
      textColor = "light";
      currPanel = 6;
      break;
    case 7:
      pTop.style.top = "-200vh";
      pLeft.style.left = 0;
      textColor = "light";
      currPanel = 7;
      break;
    case 8:
      pTop.style.top = "-200vh";
      pLeft.style.left = "-100vw";
      textColor = "light";
      currPanel = 8;
      break;
    case 9:
      pTop.style.top = "-200vh";
      pLeft.style.left = "-200vw";
      textColor = "light";
      currPanel = 9;
      break;
    default:
      pTop.style.top = "-100vh";
      pLeft.style.left = "-100vw";
      textColor = "light";
      currPanel = 5;
  }

  $('#legend div').removeClass('active');
  if($('#legend').hasClass("light") && textColor == "dark") {
    $('#legend, #menu').removeClass("light");
  } else if($('#legend').hasClass("dark") && textColor == "light") {
      $('#legend, #menu').removeClass("dark");
  } else {
    // do nothing
  }

  $("#pullPanel" + n).addClass("active");
  $("#legend, #menu").addClass(textColor);
}

window.addEventListener("keydown", function (e) {
  if(e.keyCode == 37) { // left arrow
    if(currPanel == 2 || currPanel == 3 || currPanel == 5 || currPanel == 6 || currPanel == 8 || currPanel == 9) {
      pullPanel(currPanel - 1);
    }
  }
  if(e.keyCode == 38) { // up arrow
    if(currPanel > 3) {
      pullPanel(currPanel - 3);
    }
  }
  if(e.keyCode == 39) { //right arrow
    if(currPanel == 1 || currPanel == 2 || currPanel == 4 || currPanel == 5 || currPanel == 7 || currPanel == 8) {
      pullPanel(currPanel + 1);
    }
  }
  if(e.keyCode == 40) { //down arrow
    if(currPanel < 7) {
      pullPanel(currPanel + 3);
    }
  }
});

$("#menu i").on('click', function() {
    $('#menu-sidebar').fadeToggle();
})
$(".col-r div").on('click', function() {
    $('#menu-sidebar').fadeOut(1500);
})

//Blast the Rocket!
const init = () => {
  console.log(window.location.href);
  $('#main-container').fadeIn(1500);

  var cn = getUrlParameter('panel');
  if(cn != undefined && cn !== "" && !isNaN(cn)) {
    pullPanel(Number(cn));
  } else {
    pullPanel(5);
  }

  setSkillDates;
}




//Listen Up Boyz!
window.onload = init;

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
