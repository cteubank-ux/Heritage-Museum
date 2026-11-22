// Find the native disclosure button and the list it controls on this page.
const button = document.querySelector(".menu-button");
const list = document.querySelector("#primary-nav");

// Enhance only when both required elements exist; without JavaScript the list stays visible.
if (button && list) {
  button.hidden = false;
  button.closest(".site-nav").dataset.enhanced = "true";
  list.dataset.state = "closed";

  // Keep the visual list state and the button's accessible expanded state synchronized.
  function setMenuOpen(isOpen) {
    button.setAttribute("aria-expanded", String(isOpen));
    list.dataset.state = isOpen ? "open" : "closed";
  }

  // Native button activation supports both pointer clicks and keyboard Enter/Space.
  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  // Escape closes an open narrow menu and returns keyboard focus to its controlling button.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !window.matchMedia("(min-width: 64rem)").matches && button.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      button.focus();
    }
  });
}
