describe('Testing mobile devices', () => {
    it('There must be a burger menu button', () => {
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

describe('Navigation menu burger icon', () => {
    context('iPhone xr resolution', () => {
      beforeEach(() => {
        cy.viewport('iphone-xr');
      });
  
      it('There must be a burger menu button', () => {
        cy.visit('/');
  
        cy.getByData('button-login').click();
        cy.getByData('email-input').type('kayo.ennrique@hotmail.com.br');
        cy.getByData('password-input').type('123456');
        cy.getByData('button-toSend').click();
  
        cy.location('pathname').should('eq', '/home');
  
        cy.getByData('menu-burguer').should('be.visible');
      });
    });
  
    context('Mackbook 13 resolution', () => {
      beforeEach(() => {
        cy.viewport('macbook-13');
      });
  
      it('Não deve existir um botão menu burguer', () => {
        cy.visit('/');
  
        cy.getByData('button-login').click();
        cy.getByData('email-input').type('kayo.ennrique@hotmail.com.br');
        cy.getByData('password-input').type('123456');
        cy.getByData('button-toSend').click();
  
        cy.location('pathname').should('eq', '/home');
  
        cy.getByData('menu-burguer').should('not.be.visible');
      });
    });
  });