function copyBibTeX() {
  const code = document.getElementById("bibtex-code");
  const label = document.querySelector("[data-copy-label]");
  if (!code || !label || !navigator.clipboard) return;

  const original = label.textContent;
  navigator.clipboard.writeText(code.innerText).then(() => {
    label.textContent = "Copied";
    window.setTimeout(() => {
      label.textContent = original;
    }, 1200);
  });
}

function fitHeroTitle() {
  const title = document.querySelector(".publication-title");
  if (!title) return;

  title.style.fontSize = "";
  if (!window.matchMedia("(min-width: 1100px)").matches) return;

  let fontSize = parseFloat(window.getComputedStyle(title).fontSize);
  const minFontSize = 42;
  const maxHeight = 155;

  while (title.offsetHeight > maxHeight && fontSize > minFontSize) {
    fontSize -= 1;
    title.style.fontSize = `${fontSize}px`;
  }
}

window.addEventListener("DOMContentLoaded", fitHeroTitle);
window.addEventListener("resize", () => {
  window.clearTimeout(window.__ctibenchTitleFitTimer);
  window.__ctibenchTitleFitTimer = window.setTimeout(fitHeroTitle, 80);
});
