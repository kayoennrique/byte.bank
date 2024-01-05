import {faker} from '@faker-js/faker/locale/pt_BR'

describe('User registration test', () => {
  const user = {
    nome: faker.name.fullName(),
    email: faker.internet.email(),
    senha: faker.internet.password(),
  };

  it('It should allow you to successfully register a user', () => {
    cy.visit('/');

    cy.getByData('botao-cadastro').click();
    cy.getByData('nome-input').type(user.nome);
    cy.getByData('email-input').type(user.email);
    cy.getByData('senha-input').type(user.senha);
    cy.getByData('checkbox-input').check();
    cy.getByData('botao-enviar').click();

    cy.getByData('message-sucess')
      .should('exist')
      .contains('Usuário cadastrado com sucesso!');

    cy.request('GET', 'http://localhost:8000/users').then((response) => {
      expect(response.body).to.have.lengthOf.at.least(1);
      expect(response.body[response.body.length - 1]).to.deep.include(user);
    });
  });
});
