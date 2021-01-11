// const toggleNav = document.querySelector(".navButton");
// toggleNav.addEventListener("click", showNavigation);
// function showNavigation() {
//   const navBar = document.getElementById("navId");
//   if (navBar.style.display === "none") {
//     navBar.style.display = "flex";
//   } else {
//     navBar.style.display = "none";
//   }
// }

var coll = document.getElementsByClassName("collapsibleDescription");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var modal = document.getElementById("myModal");
var modalClass = document.getElementsByClassName("modal");
var bioButton = document.getElementById("bioButton");

var span = document.getElementsByClassName("close")[0];

bioButton.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
