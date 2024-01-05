describe('Testing multiple pages', {browser: 'edge'}, () => { 
  it('You should be able to access the cards page', ()=>{
    cy.visit('/');
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('kayo.ennrique@hotmail.com.br');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();

    cy.location('pathname').should('eq','/home');

    cy.getByData('app-home').find('a').eq(1).click();
    cy.getByData('title-cards').should('exist').and('have.text', 'Meus cartões');

    cy.location('pathname').should('eq', '/home/cards');
  });
});