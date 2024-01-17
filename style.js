var slideIndex = 1;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slideIndex >= slides.length) { slideIndex = 0 }
  if (slideIndex < 0) { slideIndex = slides.length - 1 }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Call showSlides() initially to display the first image
showSlides();
