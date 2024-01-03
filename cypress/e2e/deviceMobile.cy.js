describe('Testando dispositivos móveis', () => {
    it('Deve existir um botão menu burguer', () => {
      cy.visit('/');
  
      cy.getByData('button-login').click();
      cy.getByData('email-input').type('kayo.ennrique@hotmail.com.br');
      cy.getByData('password-input').type('123456');
      cy.getByData('button-toSend').click();
  
      cy.location('pathname').should('eq', '/home');
  
      cy.getByData('menu-burguer').click();
      cy.getByData('menu-lateral').find('a').eq(3).click();
  
      cy.location('pathname').should('eq', '/home/investiments');
    });
});