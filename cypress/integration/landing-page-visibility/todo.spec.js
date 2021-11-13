describe('healthy dashboard app', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.log('I run before every test');
  });

  it('displays the header soundtrack', () => {
    cy.get('h3').should('have.length', 10);
  });
});
