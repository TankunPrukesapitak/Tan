const locator = {
  //login
  BaseURL: 'http://localhost:5122/',
  PathURL: 'Student/Index',
  PathURL_2: 'Account/Login',
  emailInputSelector: 'input[id="email-sign-in"]',
  passwordInputSelector: 'input[id="password-sign-in"]',
  loginButton: 'button[id="SignIn"]',

  //register
  register: 'a[id="sign-up"]',
  emailRegister :'input[id="email-sign-up"]',
  passwordRegister: 'input[id="password-sign-up"]',
  confirmpasswordRegister: 'input[id="confirmPassword-sign-up"]',
  registerButton: 'button[id="SignUp"]',
};

module.exports = locator;