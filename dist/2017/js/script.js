//Resume Sub Nav Jump to Heading with Margin-Top Offset Bug Fix
$('#resume-nav a').click(function(event) {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({scrollTop: target.offset().top - $('#resume-nav').outerHeight() - 20}, 1000, function() {
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) {
          return false;
        } else {
          $target.attr('tabindex','-1');
          $target.focus();
        };
      });
    }
  }
});

//Resume Logo Position Fixed Lock Start and Stop Sticky
$(document).on('scroll', function() {
  var start = $('.resume-sec').position().top-100;
  var end = $('#resume-sec-2-end').position().top + 480;
  if (window.innerWidth >= 992) {
    if($(this).scrollTop() > start && $(this).scrollTop() < end) {
      $('#contact-sec').addClass('fixedFlow').removeClass('fixedStart fixedEnd');
    } else if($(this).scrollTop() > end){
      $('#contact-sec').addClass('fixedEnd').removeClass('fixedStart fixedFlow');
    } else {
      $('#contact-sec').addClass('fixedStart').removeClass('fixedFlow fixedEnd');
    }
  } else {
    $('#contact-sec').removeClass('fixedStart fixedFlow fixedEnd');
  }
});


// Import External File
function pull(path, place) {$.get(path).done(function(data) {$(place).html(data);});}

// Set years of Experience on Resume Skills Tag Name
function setExpDates() {
  //web
  set('html-web',2000);
  set('css-web',2001);
  set('js-web',2011);
  set('jq-web',2014);
  set('ajax-web',2015);
  set('php-web',2010);
  set('mysql-web',2015);
  set('btsp-web',2014);
  set('wp-web',2010);
  set('ng-web',2016);
  set('gas-web',2016);
  set('gsg-web',2013);
  set('dmdns-web',2000);
  set('rwd-web',2012);
  set('ux-ix-web',2012);

  //apps
  set('ps-app',2010);
  set('ai-app',2012);
  set('dw-app',2012);
  set('pp-app',2014);


  function set(w,x) { id(w).innerHTML = "(" + subtract(x,new Date().getFullYear()) + "+)"; }
}

// Subtract
function subtract(a,b) {
  return b-a;
}

//function document.getElementById Shortcut
function id(id) {
  return document.getElementById(id);
}


//fixedSidebar
$('#resume-sec-1>div.sticky').on("scroll", function(e) {
  if (this.scrollTop > 147) {
    $('#resume-sec-1>div.sticky').addClass("fix-search");
  } else {
    $('#resume-sec-1>div.sticky').removeClass("fix-search");
  }
});


//Blast the Rocket!
function init() {
  $('body').scrollspy({ target: '#resume-nav', offset: $('#resume-nav').outerHeight() + 20 });

  var introText = new Typed('#introText', {
    strings: [
      '^500 <span style="color: #FFFFFF;">Welcome to</span>',
      '^500 <span style="color: #1570cf;">my portfolio</span>^500',
      '^500 <span style="color: #d03f3f;">my resume</span>^500',
      '^500 <span style="color: #a01fdd;">my passion</span>^500'
    ],
    typeSpeed: 15,
    backSpeed: 15,
    smartBackspace: true, // this is a default
    showCursor: true,
    loop: true,
    onComplete: function(self) { false; }
  });

  setExpDates();
};


//Listen Up Boyz!
window.onresize = init;
window.onload = init;
