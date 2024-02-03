const panels = document.querySelectorAll(".panel");
function removeAllActive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
panels.forEach((el) => {
  el.addEventListener("click", () => {
    removeAllActive();
    el.classList.add("active");
  });
});
