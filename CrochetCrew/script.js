const img = document.querySelector('img');

img.addEventListener('click', () => {
  img.classList.toggle('flip');
});

window.onscroll = function() { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//Makes navbar change color on scroll
function changeNavbarColor() {

  var scrollPos = window.pageYOffset;
  var home = document.getElementById("home")
  if (scrollPos > 0.1) {
    navbar.style.backgroundColor = '#0A2C64'
    home.style.color = "#F8EBF0"
    document.getElementById("about-us").style.color = "#F8EBF0"
    document.getElementById("organizations").style.color = "#F8EBF0"
    document.getElementById("tutorials").style.color = "#F8EBF0"
    document.getElementById("instagram").style.color = "#F8EBF0"
    document.getElementById("contact").style.color = "#F8EBF0"
  } else {
    navbar.style.backgroundColor = '#F8EBF0'
    document.getElementById("home").style.color = "#0A2C64"
    document.getElementById("about-us").style.color = "#0A2C64"
    document.getElementById("organizations").style.color = "#0A2C64"
    document.getElementById("tutorials").style.color = "#0A2C64"
    document.getElementById("instagram").style.color = "#0A2C64"
    document.getElementById("contact").style.color = "#0A2C64"
  }
}

//Credit: https://www.youtube.com/watch?v=qARueNQFk04&t=479s
const navLi = document.querySelectorAll('a')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLi.forEach(a => {
    a.classList.remove('active')
    document.querySelector('a[href*= ' + current + ']').classList.add('active');
  });
});

// listen for scroll events
window.addEventListener('scroll', changeNavbarColor);

//delete the default name field but not the user input
function clearName() {
  if (document.getElementById('nameField').value == 'Example: Herbert Hoova') {
    document.getElementById('nameField').value = '';
  }
}
//bring back the default text if name field is empty
function resetName() {
  if (document.getElementById('nameField').value == '') {
    document.getElementById('nameField').value = 'Example: Herbert Hoova';
  }
}
//delete the default address field but not the user input
function clearAddress() {
  if (document.getElementById('addressField').value == 'Example: 123 Sesame Street') {
    document.getElementById('addressField').value = '';
  }
}
//bring back the default text if address field is empty
function resetAddress() {
  if (document.getElementById('addressField').value == '') {
    document.getElementById('addressField').value = 'Example: 123 Sesame Street';
  }
}
//delete the default email field but not the user input
function clearEmail() {
  if (document.getElementById('emailField').value == 'Example: crocheting_is_fun@crochetcrew.com') {
    document.getElementById('emailField').value = '';
  }
}
//bring back the default text if email field is empty
function resetEmail() {
  if (document.getElementById('emailField').value == '') {
    document.getElementById('emailField').value = 'Example: crocheting_is_fun@crochetcrew.com';
  }
}