const locator = require('../testdata/locator');

function registerWithCredentials(email, password, confirmpassword) { 
    cy.get(locator.register).click();
    cy.get(locator.emailRegister).type(email);
    cy.get(locator.passwordRegister).type(password);
    cy.get(locator.confirmpasswordRegister).type(confirmpassword);
}

module.exports = {
    registerWithCredentials
  };