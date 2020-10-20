describe('Film Search', () => {
  it('checks that the search bar exists and is visible', () => {
    cy.visit('/');
    cy.get('input').should('exist');
    cy.get('input').should('be.visible');
  })

  it('returns no results if the director is not in our list', () => {
    const directorName = 'David Cronenberg';
    cy.visit('/');
    cy.get('input').type(directorName);
    cy.get('.cards-container').should('not.exist');
  })

  it('returns no results if the film is not in our list', () => {
    const filmTitle = 'Pierrot le Fou';
    cy.visit('/');
    cy.get('input').type(filmTitle);
    cy.get('.cards-container').should('not.exist');
  })

  it('returns results using a capitalized search term for the film title', () => {
    const searchTerm = 'Boiling Point';
    const filmTitle = 'Boiling Point';
    const filmDirector = 'Takeshi Kitano'
    const filmDescription = 'some description';
    cy.visit('/');
    cy.get('input').type(searchTerm);
    cy.get('.cards-container').should('exist');
    cy.get('.cards-container').should('be.visible');
    cy.get('.ui.card').its('length').should('eq', 1);
    cy.get('.ui.card').within(($card) => {
      cy.get('.header').should('contain', filmTitle);
      cy.get('.meta').should('contain', filmDirector);
      cy.get('.description').should('contain', filmDescription);
    });
  })

  it('returns results using a lower case search term for the film title', () => {
    const searchTerm = 'boiling point';
    const filmTitle = 'Boiling Point';
    const filmDirector = 'Takeshi Kitano'
    const filmDescription = 'some description';
    cy.visit('/');
    cy.get('input').type(searchTerm);
    cy.get('.cards-container').should('exist');
    cy.get('.cards-container').should('be.visible');
    cy.get('.ui.card').its('length').should('eq', 1);
    cy.get('.ui.card').within(($card) => {
      cy.get('.header').should('contain', filmTitle);
      cy.get('.meta').should('contain', filmDirector);
      cy.get('.description').should('contain', filmDescription);
    });
  })

  it('displays multiple films', () => {
    const searchTerm = 'Takeshi Kitano';
    cy.visit('/');
    cy.get('input').type(searchTerm);
    cy.get('.cards-container').should('exist');
    cy.get('.cards-container').should('be.visible');
    cy.get('.ui.card').its('length').should('eq', 2);
  })
})
