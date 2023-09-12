const template = document.createElement("template");
template.innerHTML = `
<style>
    .modelcar-card {
        --header-color{ color: #fff };
        font-family: sans-serif;
        background: var(--header-color);
        width: 250px;
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 10px;
    }
    .img {
        height: 200px;
        object-fit: scale-down;
        width: 250px;
    }
</style>
<div class="modelcar-card">
    <img class="img"/>
    <div>
        <h3></h3>
        <div class="details">
            <p><slot name="id"/></p>
            <p><slot name="brand"/></p>
            <p><slot name="manufacturer"/></p>
            <p><slot name="scale"/></p>
        </div>
    </div>
</div>
`;

class ModelcarCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");
    this.shadowRoot.querySelector("img").src = this.getAttribute("image");
    document.body.style.setProperty(
      "--header-color",
      this.getAttribute("headerColor")
    );
  }

  connectedCallback() {
    this.h3 = this.getAttribute("name");
    this.render();
  }

  render() {
    this.h3;
  }
}

window.customElements.define("modelcar-card", ModelcarCard);
