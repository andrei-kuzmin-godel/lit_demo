import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class CustomElement extends LitElement {
  @property({ type: String }) title = 'test';

  static styles = css`
    
  `;

  render() {
    return html`
      <div>
        ${this.title}
      </div>
    `;
  }
}
