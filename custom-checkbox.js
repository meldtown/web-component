export class Checkbox extends HTMLElement {
  _checked = false;
  _disabled = false;

  constructor() {
    super();

    this.initialize();
  }

  static get observedAttributes() {
    return ['disabled', 'checked'];
  }

  connectedCallback() {
    this.addEventListener('click', () => {
      if (this.disabled) return;

      this.toggle();
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    this.handleChange(name, newValue);
  }

  get checked() {
    return this._checked;
  }

  set checked(value) {
    this._checked = value;

    value ?
      this.setAttribute('checked', '') :
      this.removeAttribute('checked');
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = value;

    value ?
      this.setAttribute('disabled', '') :
      this.removeAttribute('disabled');
  }

  toggle() {
    this.checked = !this.checked;
  }

  initialize() {
    const template = this.createTemplate();
    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.appendChild(template);
  }

  createTemplate() {
    const template = document.createElement('template');

    template.innerHTML = `${this.getStyles()}\n${this.getContent()}`;

    const templateContent = template.content.cloneNode(true);

    return templateContent;
  }

  getStyles() {
    return `
      <style>
        :host {
          display: inline-block;
          width: 20px;
          height: 20px;
          margin-left: 5px;
          border-radius: 5px;
          text-align: center;
          line-height: 20px;
          background-color: cornflowerblue;
          user-select: none;
          cursor: pointer;
        }
        
        :host([disabled]) {
          opacity: .5;
          cursor: not-allowed;
        }
        
        :host([checked]) .custom-checkbox {
          display: initial;
        }
       
        
        .custom-checkbox {
          display: none;
          font-size: 20px;
          color: #fff;
        }
      </style>
    `;
  }

  getContent() {
    return `
      <div class="custom-checkbox">&#10003;</div>
    `;
  }

  handleChange(name, value) {
    switch (name) {
      case 'checked':
        this.handleCheckedChange(value);
        break;
      case 'disabled':
        this.handleDisabledChange(value);
        break;
    }
  }

  handleCheckedChange(value) {
    const checked = value !== null;

    this.checked = checked;
  }

  handleDisabledChange(value) {
    const disabled = value !== null;

    this.disabled = disabled;
  }
}

customElements.define('custom-checkbox', Checkbox);
