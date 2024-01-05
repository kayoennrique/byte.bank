describe('Home Page', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/');
  })
  it('Should render the h1 with the correct text', () => {
    cy.getByData('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
