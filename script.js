fetch("header.html").then(res => {
  return res.text();
}).then(headerHtml => {
  const header = document.getElementById('header-container');
  header.innerHTML = headerHtml;
})

fetch("footer.html").then(res => {
  return res.text();
}).then(footerHtml => {
  const footer = document.getElementById('footer-container');
  footer.innerHTML = footerHtml;
})


function clearInput(){
  document.getElementById("contactme-form").reset();
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

setTimeout(function start (){
  
  $('.bar').each(function (i) {  
      var $bar = $(this);
      $(this).append('<span class="count"></span>')
      setTimeout(function(){
        $bar.css('width', $bar.attr('data-percent'));      
      }, i*100);
    });
   
  $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).parent('.bar').attr('data-percent')
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now) +'%');
          }
      });
  });
   
  }, 500)