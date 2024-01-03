 Cypress.Commands.add('getByData', (selector) => {
    return cy.get(`[data-test=${selector}]`);
 });

 Cypress.Commands.add('checkText', (selector, text) => {
   cy.get(`${selector}`).contains(`${text}`)
 });