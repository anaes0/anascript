/* sticky header when scrolled */
document.addEventListener('scroll', () => {
  const navbar = document.querySelector('navbar');

  if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

/* hide element when scrolling */
document.addEventListener('scroll', () => {
  const websubtitle = document.getElementById('web');

  if (window.scrollY > 100) {
      websubtitle.style.display = 'none'; // hide web subtitle
  } else {
      websubtitle.style.display = 'inline'; // show web subtitle
  }
});

/* circle styling appears when scrolled */
document.addEventListener('scroll', function () {
  var goldCircle = document.getElementById('goldCircle');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    goldCircle.classList.add('scroll-show');
  } else {
    goldCircle.classList.remove('scroll-show');
  }
});


/* section appear when scrolled */
const the_animation = document.querySelectorAll('.animation');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animation');
      } else {
          entry.target.classList.remove('scroll-animation');
      }
  });
}, { threshold: 0.5 });

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

  observer.observe(elements);
}

/* dropdown menu */

/* intro animated text */
var words = ['development.', 'design.', 'minimalism.'],
  wordWrapper = document.getElementById('typed-words'),
  wordWrapperContent = wordWrapper.innerHTML,
  addingWord = false,
  counter = 0;

function animateWords() {
  setInterval(function () {
      if (wordWrapperContent.length > 0 && !addingWord) {
          wordWrapper.innerHTML = wordWrapperContent.slice(0, -1);
          wordWrapperContent = wordWrapper.innerHTML;
      } else {
          addingWord = true;
      }

      if (addingWord) {
          if (wordWrapperContent.length < words[counter].length) {
              wordWrapper.innerHTML = words[counter].slice(0, wordWrapperContent.length + 1);
              wordWrapperContent = wordWrapper.innerHTML;
          } else {
              if (counter < words.length - 1) {
                  counter++;
              } else {
                  counter = 0; // Reset counter to repeat words
              }
              addingWord = false;
          }
      }
  }, 150);
}

// call the function to start the animation
animateWords();

/* button on scroll */
mybutton = document.getElementById("back-to-top");

// if user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
  } else {
      mybutton.style.display = "none";
  }
}

// on click, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, and Opera
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(".fa-bars").forEach(function (el) {
      el.addEventListener("click", function () {
          document.querySelector("nav").classList.add("show");
      });
  });

  document.querySelectorAll(".fa-xmark").forEach(function (el) {
      el.addEventListener("click", function () {
          document.querySelector("nav").classList.remove("show");
      });
  });

  document.querySelectorAll("a").forEach(function (el) {
      el.addEventListener("click", function () {
          document.querySelector("nav").classList.remove("show");
      });
  });
});