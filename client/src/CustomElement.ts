import { LitElement, html, css } from 'lit';
import { property, customElement as customElementDecorator } from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

type Preference = {
  context: string,
  namespace: string,
  key: string,
  value: Boolean,
  updatedAt: string,
  updatedBy: string
}

type PreferencesResponse = {
  emailAddress: string,
  preferences: Array<Preference>
}

@customElementDecorator('custom-element')
export class CustomElement extends LitElement {
  @property({ type: String }) title = 'test';

  @property({ type: Boolean }) hasError: boolean = false;

  @property({ type: String }) emailAddress: string = '';

  @property({ type: Array }) preferencesArray: Preference[] = [];

  static styles = css`

    main {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
  `;

  private async getPreferences(): Promise<any> {
    try {
      const response = await fetch('http://localhost:3000/preferences');

      return response.json();
    }
    catch (e) {
      this.hasError = true;
      throw e;
    }
  };

  private formatPreferences(preferencesResponse: PreferencesResponse) {
    this.emailAddress = preferencesResponse.emailAddress;
    this.preferencesArray = preferencesResponse.preferences
  }

  private displayPreferences() {
    return html`
      <ul>
            ${map(this.preferencesArray, (pref) =>
              html`
                <li>
                  ${pref.key !== 'indicative-quotes' ? pref.key : pref.context} <input type="checkbox" ?checked=${pref.value}>
                </li>
              `)}
      </ul>
    `
  };

  async connectedCallback(): Promise<void> {
    super.connectedCallback();
    const preferencesResponse = await this.getPreferences();
    this.formatPreferences(preferencesResponse);
  }


  render() {
    return html`
    <main>
      <div>
        <p>Email Address - ${this.emailAddress}</p>
        <ul>
            ${this.displayPreferences()}
        </ul>
      </div>
    </main>
    `;
  }
}
