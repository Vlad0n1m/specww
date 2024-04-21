let acc = document.getElementsByClassName("filter-item")
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = "0"

    } else {
      panel.style.maxHeight = panel.scrollHeight + 20 + "px";
      panel.style.padding = "10px 0 10px 50px"
    }
  });
}


