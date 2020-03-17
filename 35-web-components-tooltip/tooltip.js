class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipIcon;
    this._tooltipVisible = false;
    this._tooltipText = "Dummy tooltip text";
    this.attachShadow({ mode: "open" });
    const template = document.querySelector("#tooltip-template");
    this.shadowRoot.innerHTML = `
    <style>
      div {
        font-weight: normal;
        background-color: black;
        color: white;
        position: absolute;
        top: 1.5rem;
        left: 0.75rem;
        z-index: 10;
        padding: 0.15rem;
        border-radius: 3px;
        border-shadow: 1px 1px 6px rgba(0, 0, 0, 0.26);
      }

      :host(.important){
        background: var(--color-primary, #ccc);
        padding: 0.15rem;
      }

      :host-context(p){
        font-weight: bold;
      }

      .highlight{
        background-color: red;
      }

      ::slotted(.highlight){
          border-bottom: 1px dotted red;
      }
      
      .icon{
        background: black;
        color: white;
        padding: 0.15rem 0.5rem;
        text-align: center;
        border-radius: 50%;
      }
      
    </style>
    <slot>Some default</slot>
    <span class="icon">?</span>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute("text")) {
      this._tooltipText = this.getAttribute("text");
    }
    this._tooltipIcon = this.shadowRoot.querySelector("span");
    this._tooltipIcon.addEventListener(
      "mouseenter",
      this._showTooltip.bind(this)
    );
    this._tooltipIcon.addEventListener(
      "mouseleave",
      this._hideTooltip.bind(this)
    );
    this.style.position = "relative";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }

    if (name === "text") {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    return ["text"];
  }

  disconnectedCallback() {
    this._tooltipIcon.removeEventListener("mouseenter", this._showTooltip);
    this._tooltipIcon.removeEventListener("mouseenter", this._hideTooltip);
  }

  _render() {
    let tooltipContainer = this.shadowRoot.querySelector("div");
    if (this._tooltipVisible) {
      tooltipContainer = document.createElement("div");
      tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      if (tooltipContainer) {
        this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }

  _showTooltip() {
    this._tooltipVisible = true;
    this._render();
  }

  _hideTooltip() {
    this._tooltipVisible = false;
    this._render();
  }
}

customElements.define("uc-tooltip", Tooltip);
