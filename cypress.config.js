const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 467e99bb3191e604676f4791fa2215a068b23059
