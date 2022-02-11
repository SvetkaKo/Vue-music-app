// https://docs.cypress.io/api/introduction/api.html

import { cyan } from '@tailwindcss/postcss7-compat/colors';

describe('Sanity Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('hi', 'Listen to Great Music!');
  });
});
