describe('Login Form', () => {

  it.only('You must access the home page', () => {
    cy.login('kayo.ennrique@hotmail.com.br', '123456');
    cy.visit('/home')
    cy.getByData('title-welcome').should('contain', 'Bem vindo de volta!');
  });
  
  it('Should not allow an invalid email', () => {
    cy.getByData('button-login').click();
    cy.getByData('email-input').type('kayo.ennrique@hotmail.com.br');
    cy.getByData('password-input').type('123456');
    cy.getByData('button-toSend').click()
    cy.getByData('message-erro').should('exist').and('have.text', 'O email digitado é inválido');
  });

  it('Should not allow a blank field', () => {
    cy.getByData('button-login').click();
    cy.getByData('password-input').type('123456');
    cy.getByData('button-toSend').click()
    cy.getByData('message-erro').should('exist').and('have.text', 'O campo email é obrigatório');
  });
});