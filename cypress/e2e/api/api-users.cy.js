describe('Making requests to the API', () => {
    context('GET /users', () => {
      it('Should return a list of users', () => {
        cy.request('GET', 'http://localhost:8000/users').then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).length.to.be.greaterThan(1);
        });
      });
    });
  
    context('GET /users/:userId', () => {
      it('Must return a single user', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:8000/users/40a41438-84a6-4b4d-ae1d-7f1713d0a9fe',
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('name');
        });
      });
  
      it('Should return an error when the user is invalid', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:8000/users/40a41438-84a6-4b4d',
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.eq('Not Found');
        });
      });
    });
  
    context('Intercepting network requests', () => {
      it('You must intercept the POST users/login', () => {
        cy.intercept('POST', 'users/login').as('loginRequest');
        cy.login('kayo.ennrique@hotmail.com.br', '123456');
        cy.wait('@loginRequest').then((interception) => {
          interception.response = {
            statusCode: 200,
            body: {
              sucess: true,
              message: 'Login bem sucedido!',
            },
          };
        });
        cy.visit('/home');
  
        cy.getByData('title-welcome').should(
          'contain.text',
          'Bem vindo de volta!'
        );
      });
    });
});