Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/')
  cy.getByData('button-login').click();
  cy.getByData('email-input').type(email);
  cy.getByData('password-input').type(password);
  cy.getByData('button-toSend').click()
  cy.url().should('contain', '/home')
});

Cypress.Commands.add('checkText', (selector, text) => {
   cy.get(`${selector}`).contains(`${text}`)
});