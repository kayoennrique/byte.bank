it('Should correctly render perks section text ', () => {
  cy.visit('http://localhost:3000/');
  cy.get('h2').contains('Advantages of our bank:');
});