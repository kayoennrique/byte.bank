describe('Start', () => {
  it('Should render the h1 with the correct text', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="main-title"]').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});