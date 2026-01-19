// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Steam iframe fallback logic:
// If the widget fails to load, show a nice fallback overlay.
document.querySelectorAll(".steam-frame").forEach((frame) => {
  const fallback = frame.parentElement.querySelector(".embed-fallback");
  let loaded = false;

  frame.addEventListener("load", () => {
    loaded = true;
    if (fallback) fallback.style.display = "none";
  });

  setTimeout(() => {
    if (!loaded && fallback) fallback.style.display = "flex";
  }, 1500);
});