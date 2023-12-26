
const {loginTestData, locator, loginKeyword} = require('./testdata/import');


describe('Login Feature', () => {

  beforeEach(() => {
    cy.viewport(1500, 800);
    cy.visit(locator.BaseURL);
  });

  it('TC_L_1 Verify that the user is able to login successfully with the correct email and password.', () => {
    loginKeyword.loginWithCredentials(loginTestData.validEmail, loginTestData.validPassword);
    cy.url().should('eq', `${locator.BaseURL}${locator.PathURL}`);
  })

  it('TC_L_2 Verify that the user is not able to login successfully with the correct email and incorrect password.', () => {
    loginKeyword.loginWithCredentials(loginTestData.validEmail, loginTestData.InvalidPassword);
    cy.contains(loginTestData.errorMessageLogin_1).should('be.visible');
    cy.contains('OK', { matchCase: false }).first().click();
    cy.url().should('eq', locator.BaseURL);
  })

  it('TC_L_3 Verify that the user is not able to login successfully with the incorrect email and correct password.', () => {
    loginKeyword.loginWithCredentials(loginTestData.InvalidEmail, loginTestData.validPassword);
    cy.contains(loginTestData.errorMessageLogin_1).should('be.visible');
    cy.contains('OK', { matchCase: false }).first().click();
    cy.url().should('eq', locator.BaseURL);
  })

  it('TC_L_4 Verify that the user is not able to login successfully with the correct email and incorrect password.', () => {
    loginKeyword.loginWithCredentials(loginTestData.InvalidEmail, loginTestData.InvalidPassword);
    cy.contains(loginTestData.errorMessageLogin_1).should('be.visible');
    cy.contains('OK', { matchCase: false }).first().click();
    cy.url().should('eq', locator.BaseURL);
  })

  it('TC_L_5 Verify that the user is not able to login successfully with the email and password is emplty.', () => {
    cy.get(locator.loginButton).click();
    cy.contains(loginTestData.errorMessageLogin_2).should('be.visible');
    cy.contains('OK', { matchCase: false }).first().click();
    cy.url().should('eq', locator.BaseURL);
  })
})

