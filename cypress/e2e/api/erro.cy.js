describe('Testing the Users API PUT method', () => {
    it('Update user information successfully', () => {
      const user = {
        name: 'Kamylla Barreto',
        password: '123456',
      };
  
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/users/c691fd15-dcd5-4f24-89da-cdfa3cef9d67',
        body: user,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq(user.name);
        expect(response.body.password).to.eq(user.password);
      });
    });
  
    it('Returns error 404 for non-existent user', () => {
      const user = {
        name: 'Nome Inválido',
        password: '123456',
      };
  
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/users/cockatiel',
        body: user,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.eq('Not Found');
      });
    });
  });