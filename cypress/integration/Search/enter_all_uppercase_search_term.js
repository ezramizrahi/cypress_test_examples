import { When } from "cypress-cucumber-preprocessor/steps";

const searchTerm = 'BOILING POINT';
When('I enter an all uppercase search term', () => {
  cy.get('input').type(searchTerm);
});
