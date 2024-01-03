it('Should correctly render perks section text ', () => {
  cy.visit('http://localhost:3000/');
  cy.get('h1').contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
});