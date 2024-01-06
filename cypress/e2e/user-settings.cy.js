import { faker } from '@faker-js/faker/locale/pt_BR';

describe('User data update', () => {
  const newUserData = {
    nome: faker.name.fullName(),
    senha: faker.internet.password(),
  };

  it('It must allow the user to update their data', () => {
    cy.fixture('users').as('users');
    cy.get('@users').then((user) => {
      cy.login(user[0].email, user[0].senha);

      cy.visit('/home');
      cy.url().should('include', '/home');

      cy.contains(user[0].nome).should('be.visible');

      cy.getByData('app-home').find('a').eq(1).click();

      cy.url().should('include', '/my-account');

      cy.getByData('botao-salvar-alteracoes').should('be.disabled');

      cy.get('[name = "nome"]').type(newUserData.nome);
      cy.get('[name = "senha"]').type(newUserData.senha);

      cy.getByData('botao-salvar-alteracoes').should('not.be.disabled');
      cy.getByData('botao-salvar-alteracoes').click();

      cy.on('window:alert', (textOfAlert) => {
        expect(textOfAlert).to.equal('Alterações salvas com sucesso!');
      });

      cy.url().should('include', '/home');

      cy.window().then((win) => {
        expect(win.localStorage.getItem('userName')).to.equal(
          newUserData.nome
        );

        const userId = win.localStorage.getItem('userId');

        cy.request('GET', `http://localhost:8000/users/${userId}`).then(
          (response) => {
            expect(response.status).to.eq(200);
            expect(response.body.nome).to.be.equal(newUserData.nome);
            expect(response.body.senha).to.be.equal(newUserData.senha);
          }
        );
      });
    });
  });
});