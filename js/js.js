			$('.nav').Stickyfill();

			$(function() {
			  $('a[href*="#"]:not([href="#"])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      if (target.length) {
			        $('html,body').stop().animate({
			          scrollTop: target.offset().top - 70
			        }, 1000);
			        return false;
			      }
			    }
			  });
			});

//var formValidator  = new Validator("form");
//formValidator.addValidation("name","req","Please enter your Name");
// formValidator.addValidation("email","req");
// formValidator.addValidation("email","email");
// formValidator.addValidation("message","minlen=5","Message schould have minimum 20 signs");

var email = document.getElementById("email");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Check your email adress");
  } else {
    email.setCustomValidity("");
  }
});
