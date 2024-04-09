
let links = document.getElementsByTagName("li");
let circle = document.getElementById("circle");

for (link of links) {
  link.onclick = function () {
    for (link of links) {
      link.style.opacity = 1;
    }

    circle.style.left = 80 * this.value + "px";
    circle.innerHTML = this.innerHTML;
    this.style.opacity = 0;
  };
}
