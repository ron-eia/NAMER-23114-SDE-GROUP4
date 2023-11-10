// spin images on click
const cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.addEventListener("click", function(){
    card.classList.toggle("flipCard");
    });
  }

// change light/dark themes
document.getElementById("bDarkMode").addEventListener("click", function () {
  var element = document.body;
  element.classList.toggle("lightModeHumor");
});

// change h2s to uppercase
const heading2s = document.querySelectorAll(".h2Humor");
document.getElementById("bUpperCase").onclick = function () {
  for (let heading2 of heading2s) {
    heading2.classList.toggle("toUpperCase");
  }
};
