class ExtendedCard extends SimpleCard {
  get styleTemplate() {
    return html`
        ${super.styleTemplate}
        <style>
          :host {
            height: var(--ing-uic-card-height, auto);
            border-radius: 4px;
          }
      
         #footer {
          padding: calc(var(--spacer-vertical, 8px) * 3) calc(var(--spacer-horizontal, 8px) * 3);
           border-top: 1px solid var(--divider-color, #d5d5d5);
           background-color: #f2f2f2;
           font-size: 0.9em;
           text-align: center;
           color: #8c8c8c;
        }
      
          #header {
            color: orangered;
          }
      
        </style>
      `;
  }
  static get properties() {
    return {
      lastUpdated: {
        type: String,
        value: '',
        reflectToAttribute: 'last-updated',
      }
    };
  }
  get footerTemplate() {
    if (this.lastUpdated) {
    return html`
    <footer id="footer">
    Last updated ${this.lastUpdated} mins ago
    </footer>
    `;}
    else {
      return html`
      <footer id="footer">
      Not updated recently!
      </footer>
      `;
    }
  }
  render() {
    return html`
      ${this.styleTemplate}
      ${super.headerTemplate}
      ${super.bodyTemplate}
      ${this.footerTemplate}
    `;
  }



}

customElements.define('extended-card', ExtendedCard);
