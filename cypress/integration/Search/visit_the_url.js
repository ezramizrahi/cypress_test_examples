import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I visit the homepage', () => {
  cy.visit('/');
});
