class ExtendedCard extends SimpleCard {
  get styleTemplate() {
    return html`
        ${super.styleTemplate}
        <style>
          :host {
            font-family: Roboto;
          }

          #header {
            color: orangered;
            font-size: 1.4em;
          }
          
          #footer {
            border-top: 1px solid #d5d5d5;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            background-color: #ffeedd;
            font-size: 1em;
            text-align: center;
            color: grey;
            padding: 4px 24px;
          }
          
        </style>
      `;
  }
  static get properties() {
    return {
      lastUpdated: {
        type: String,
        value: '',
        reflectToAttribute: 'last-updated'
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

}

customElements.define('extended-card', ExtendedCard);
