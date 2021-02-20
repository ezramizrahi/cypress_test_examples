import { When } from "cypress-cucumber-preprocessor/steps";

const searchTerm = 'Boiling Point';
When('I enter a capitalized search term', () => {
  cy.get('input').type(searchTerm);
});
