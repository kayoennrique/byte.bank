describe('Login Form', ()=>{
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
    });
  
    it('Should not allow an invalid email', ()=>{
      cy.getByData('button-login').click();
      cy.getByData('email-input').type('kayo@hotmail');
      cy.getByData('password-input').type('123456');
      cy.getByData('button-toSend').click()
      cy.getByData('message-erro').should('exist').and('have.text', 'O email digitado é inválido');
    });

    it.only('Should not allow a blank field', ()=>{
        cy.getByData('button-login').click();
        cy.getByData('password-input').type('123456');
        cy.getByData('button-toSend').click()
        cy.getByData('message-erro').should('exist').and('have.text', 'O campo email é obrigatório');
      });
    });