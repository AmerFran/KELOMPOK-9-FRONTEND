const buttons = document.querySelectorAll(".buttons");
const boxes = document.querySelectorAll(".box");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    boxes.forEach((box) => {
      if (filter === "all") {
        box.style.display = "block"; // Show all items
      } else {
        if (box.classList.contains(filter)) {
          box.style.display = "block"; // Show only filtered category
        } else {
          box.style.display = "none"; // Hide others
        }
      }
    });
  });
});