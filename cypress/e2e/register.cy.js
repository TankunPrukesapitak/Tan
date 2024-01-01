
const {loginTestData, locator, registerKeyword, registerTestData} = require('./testdata/import');


describe('Register Feature', () => {

  beforeEach(() => {
    cy.viewport(1500, 800);
    cy.visit(locator.BaseURL);
  });

  it('TC_R_1 Verify that the user is able to register successfully with the correct email, password and confirm password.', () => {
    registerKeyword.registerWithCredentials(
      registerTestData.randomEmail, 
      registerTestData.password, 
      registerTestData.confirmpassword
    );
    cy.get(locator.registerButton).click();
    cy.contains(registerTestData.SuccessMessage).should('be.visible');
    cy.contains(
      'OK',
      { matchCase: false }
    ).first().click();
    cy.url().should(
      'eq',
      `${locator.BaseURL}${locator.PathURL_2}`
    );
    cy.get('[id="SignIn"]').should('be.visible');
  })

  it('TC_L_2 Verify that the user cannot register successfully if using a duplicate email.', () => {
    registerKeyword.registerWithCredentials(
      loginTestData.validEmail, 
      registerTestData.password, 
      registerTestData.confirmpassword
    );
    cy.get(locator.registerButton).click();
    cy.contains(registerTestData.errorMessage_2).should('be.visible');
    cy.contains(
      'OK',
      { matchCase: false }
    ).first().click();
    cy.url().should(
      'eq', 
      locator.BaseURL
    );
    cy.get('[id="SignUp"]').should('be.visible');
  })

  it('TC_L_3 Verify that the user cannot register successfully if the password and password confirmation do not match.', () => {
    registerKeyword.registerWithCredentials(
      registerTestData.randomEmail_2, 
      registerTestData.password, 
      registerTestData.confirmpassword_2
    );
    cy.get(locator.registerButton).click();
    cy.contains(registerTestData.errorMessage_3, { timeout: 10000 }).should('be.visible');
    cy.contains(
      'OK', 
      { matchCase: false }
    ).first().click();
    cy.url().should(
      'eq', 
      locator.BaseURL
    );
    cy.get('[id="SignUp"]').should('be.visible');
  })

  it('TC_L_4 Verify that the user cannot register successfully if no password is provided.', () => {
    registerKeyword.registerWithCredentials(
      registerTestData.randomEmail,
      registerTestData.password,
      registerTestData.confirmpassword_2
    );
    cy.get(locator.passwordRegister).clear();
    cy.get(locator.registerButton).click();
    cy.contains(registerTestData.errorMessage_1).should('be.visible');
    cy.contains(
      'OK', 
      { matchCase: false }
    ).first().click();
    cy.url().should(
      'eq',
      locator.BaseURL
    );
    cy.get('[id="SignUp"]').should('be.visible');
  })

  it('TC_L_5 Verify that the user cannot register successfully if no confirm password is provided.', () => {
    registerKeyword.registerWithCredentials(
      registerTestData.randomEmail, 
      registerTestData.password, 
      registerTestData.confirmpassword
    );
    cy.get(locator.confirmpasswordRegister).clear();
    cy.get(locator.registerButton).click();
    cy.contains(registerTestData.errorMessage_1).should('be.visible');
    cy.contains('OK', 
      { matchCase: false }
    ).first().click();
    cy.url().should(
      'eq', 
      locator.BaseURL
    );
    cy.get('[id="SignUp"]').should('be.visible');
  })

  it('TC_L_6 Verify that the user cannot register successfully if no email is provided.', () => {
    registerKeyword.registerWithCredentials(
      registerTestData.randomEmail, 
      registerTestData.password, 
      registerTestData.confirmpassword);
    cy.get(locator.emailRegister).clear();
    cy.get(locator.registerButton).click();
    cy.contains(registerTestData.errorMessage_1).should('be.visible');
    cy.contains(
      'OK', 
      { matchCase: false }
    ).first().click();
    cy.url().should(
       'eq',
       locator.BaseURL
    );
    cy.get('[id="SignUp"]').should('be.visible');
  })
})

