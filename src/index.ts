import { html } from 'lit-html';
import { component } from '@pionjs/pion';

const CocktailAssistant = () => {
  return html`
    <h1>Hello Cocktails World!</h1>
    <p>Select the ingredients to make the best cocktails in the word!</p>
  `;
};

customElements.define('cocktail-assistant', component(CocktailAssistant));
