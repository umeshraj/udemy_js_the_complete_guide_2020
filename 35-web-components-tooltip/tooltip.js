class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = " (?)";
    this.appendChild(tooltipIcon);
  }
}

customElements.define("uc-tooltip", Tooltip);
