/* sticky header when scrolled */
  document.addEventListener('scroll', () => {
    const header = document.querySelector('navbar');

    if(window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  })


/* hide element when scrolling */
document.addEventListener('scroll', () => {
  const websubtitle = document.getElementById('web');

  if(window.scrollY > 100) {
    websubtitle.style.display = 'none'; // hide web subtitle
  } else if(window.scrollY < 100) {
    websubtitle.style.display = 'inline'; // show web subtitle
  }  
})




/* dropdown menu */


/* intro animated text */
    var words = ['development.', 'design.'],
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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//on click, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

jQuery(document).ready(function ($) {
  $(".fa-bars").click(function () {
    $("nav").addClass("show");
  });

  $(".fa-xmark").click(function () {
    $("nav").removeClass("show");
  });

  $("a").click(function () {
    $("nav").removeClass("show");
  });
});
  