describe('User Journeys', () => {
    it('It must allow the user to access the application, carry out a transaction and log out', () => {
      cy.visit('/');
  
      cy.getByData('button-login').click();
      cy.getByData('email-input').type('kayo.ennrique@hotmail.com.br');
      cy.getByData('password-input').type('123456');
      cy.getByData('button-toSend').click();
  
      cy.location('pathname').should('eq', '/home');
  
      cy.getByData('select-options').select('Transferência');
      cy.getByData('form-input').type('80');
      cy.getByData('perform-transaction').click();
  
      cy.getByData('transaction-list').find('li').last().contains('- R$ 80');
  
      cy.getByData('button-sair').click();
      cy.location('pathname').should('eq', '/');
    });
});