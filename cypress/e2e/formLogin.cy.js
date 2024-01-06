describe('Login Form', () => {
  it.only('You must access the home page', () => {
    cy.fixture('users').then((user) => {
    cy.login(user[0].email, user[0].senha);
    cy.visit('/home');
    cy.url().should('include', '/home');
    cy.getByData('titulo-boas-vindas').should(
        'contain',
        'Bem vindo de volta!'
      );
    cy.contains(user[0].nome).should('be.visible');
    });
  });

  it('You must access the home page', () => {
    cy.login('kayo.ennrique@hotmail.com.br', '123456');
    cy.visit('/home');
    cy.getByData('titulo-boas-vindas').should('contain', 'Bem vindo de volta!');
  });

  it('Should not allow an invalid email', () => {
    cy.getByData('botao-login').click();
    cy.getByData('email-input').type('kayo.ennrique@hotmail.com.br');
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O email digitado é inválido');
  });

  it('Should not allow a blank field', () => {
    cy.getByData('botao-login').click();
    cy.getByData('senha-input').type('123456');
    cy.getByData('botao-enviar').click();
    cy.getByData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo email é obrigatório');
  });
});