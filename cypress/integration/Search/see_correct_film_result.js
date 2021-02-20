import { Then } from "cypress-cucumber-preprocessor/steps";

const filmTitle = 'Boiling Point';
const filmDirector = 'Takeshi Kitano';
const filmDescription = 'some description';
Then('I should see the correct result', () => {
  cy.get('.cards-container').should('exist');
  cy.get('.cards-container').should('be.visible');
  cy.get('.ui.card').its('length').should('eq', 1);
  cy.get('.ui.card').within(($card) => {
    cy.get('.header').should('contain', filmTitle);
    cy.get('.meta').should('contain', filmDirector);
    cy.get('.description').should('contain', filmDescription);
  });
});
