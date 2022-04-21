
function showMenu() {
  var showBtn = document.getElementById("show");
  var showIcon = document.getElementById("icon-close");
  if (showBtn.style.visibility === "hidden") {
    showBtn.style.visibility = "visible";
    showBtn.style.height = "270px"
    showBtn.style.transition = "all 0.3s"
    showIcon.classList.remove("fa-solid", "fa-bars")
    showIcon.classList.add("fa-solid", "fa-xmark")

  }
  else {
    showBtn.style.visibility = "hidden"
    showBtn.style.height = "0px"
    showIcon.classList.remove("fa-solid", "fa-xmark")
    showIcon.classList.add("fa-solid", "fa-bars")
    showBtn.style.transition = "all 0.3s"

  }
}
