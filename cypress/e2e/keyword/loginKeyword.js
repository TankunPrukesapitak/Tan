
const locator = require('../testdata/locator');

function loginWithCredentials(email, password) {    
    cy.get(locator.emailInputSelector).type(email);
    cy.get(locator.passwordInputSelector).type(password);
    cy.get(locator.loginButton).click();
}

module.exports = {
    loginWithCredentials
  };
