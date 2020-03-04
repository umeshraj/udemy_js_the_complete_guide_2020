class ConfirmLink extends HTMLAnchorElement {
  connectedCallback() {
    this.addEventListener("click", event => {
      if (!confirm("Do you really want to leave")) {
        event.preventDefault();
      }
    });
  }
}

customElements.define("uc-confirm-link", ConfirmLink, { extends: "a" });
