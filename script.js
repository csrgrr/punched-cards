// TOP BUTTON-->
var mybutton = document.getElementById("BtnUp");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// TOPNAV SMARTHPHONE-->

       function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
    
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }



// Script de boton -->
     function puncher(){
             var punchers = document.getElementsByClassName("punched")
     
             Array.from(punchers).forEach(element => {
                 element.style.backgroundColor = 'rgb(0, 0, 0)';
             });;
     
       
     }
