const registerTestData = {
    randomEmail: eval(`'fake${Math.floor(Math.random() * 100000)}@fakeemail.com'`),
    randomEmail_2: eval(`'fake_2${Math.floor(Math.random() * 100000)}@fakeemail.com'`),

    password: 'Test1234',
    confirmpassword: 'Test1234',
    confirmpassword_2: 'fail132',
    SuccessMessage: 'Registration successful! Please log in.',
    errorMessage_1: 'Please enter all required information.',
    errorMessage_2: 'This email is already registered.',
    errorMessage_3: 'Passwords do not match.',
  };
  
  module.exports = registerTestData;