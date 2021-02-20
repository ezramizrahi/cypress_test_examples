import { When } from "cypress-cucumber-preprocessor/steps";

const searchTerm = 'boiling point';
When('I enter an all lowercase search term', () => {
  cy.get('input').type(searchTerm);
});
