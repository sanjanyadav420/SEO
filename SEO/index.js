document.addEventListener("click", function (event) {
  // Get the element that was clicked
  var clickedElement = event.target;

  // Add the "clicked" class to the clicked element
  clickedElement.classList.add("clicked");

  // Remove the "clicked" class after the animation ends
  setTimeout(function () {
    clickedElement.classList.remove("clicked");
  }, 300);

  // Add the "clicked" class to other elements
  var elementsToAnimate = document.querySelectorAll(".animate-on-click");
  elementsToAnimate.forEach(function (element) {
    if (element !== clickedElement) {
      element.classList.add("clicked");
      setTimeout(function () {
        element.classList.remove("clicked");
      }, 300);
    }
  });
});

// mobile toggle

function showMenu() {
  let menu = document.querySelector("#menu-bar");
  let navlink = document.querySelector("#navlinks");
  menu.classList.toggle("fa-times");
  navlink.classList.toggle("active");
}
