describe('Carrying out transactions', () => {
  const newTransaction = {
    typeTransaction: 'Depósito',
    amount: '100',
  };

  it('It must allow the user to access the application, carry out transactions and log out', () => {
    cy.fixture('userData').as('user');
    cy.get('@user').then((user) => {
      
      cy.login(user.email, user.senha);

      
      cy.visit('/home');
      cy.url().should('include', '/home');

      
      cy.contains(user.nome).should('be.visible');

      
      cy.getByData('titulo-boas-vindas').should(
        'contain',
        'Bem vindo de volta!'
      );

      
      cy.getByData('select-opcoes').select(newTransaction.typeTransaction);
      
      cy.getByData('select-opcoes').should(
        'have.value',
        newTransaction.typeTransaction
      );

      
      cy.getByData('form-input').type(newTransaction.amount);

      
      cy.getByData('form-input').should('have.value', newTransaction.amount);

      
      cy.getByData('realiza-transacao').click();

      
      cy.getByData('lista-transacoes')
        .find('li')
        .last()
        .contains(newTransaction.amount);

      
      cy.window().then((win) => {
        const userId = win.localStorage.getItem('userId');
        
        cy.request({
          method: 'GET',
          url: `http://localhost:8000/users/${userId}/transations`,
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).is.not.empty;
          expect(response.body).to.have.lengthOf.at.least(1);
          expect(response.body[response.body.length - 1]).to.deep.include(
            newTransaction
          );
        });
      });

      
      cy.getByData('botao-sair').click();

      
      cy.url().should('include', '/');

      
      cy.getByData('titulo-principal').contains(
        'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
      );
    });
  });
});