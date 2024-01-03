describe('Login Form', ()=>{
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
    })
  
    it('Não deve permitir um email inválido', ()=>{
      cy.getByData('button-login').click()
      cy.getByData('email-input').type('neilton@alura')
      cy.getByData('password-input').type('123456')
      cy.getByData('button-toSend').click()
      cy.getByData('message-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })
  })