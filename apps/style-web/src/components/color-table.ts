export class ColorTable extends HTMLElement {
  constructor() {
    super();

    const cells = this.querySelector("table")?.querySelectorAll("td");

    if (!cells) {
      return;
    }

    for (const cell of cells) {
      const text = cell.textContent || "";

      if (/\#\w{6}/.test(text)) {
        const newElement = document.createElement("div");
        newElement.classList.add("styleweb-swatch");
        newElement.style.setProperty("--color", text);
        newElement.innerHTML = text;

        cell.replaceChildren(newElement);
      }
    }
  }
}
