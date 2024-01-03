describe('Testing multiple pages', () => { 
  it('You should be able to access the cards page', ()=>{
    cy.visit('/');
    cy.getByData('button-login').click();
    cy.getByData('email-input').type('kayo.ennrique@hotmail.com.br');
    cy.getByData('password-input').type('123456');
    cy.getByData('button-toSend').click();

    cy.getByData('app-home').find('a').eq(1).click();
    cy.getByData('title-cards').should('exist').and('have.text', 'Meus cartões');
  });
 });