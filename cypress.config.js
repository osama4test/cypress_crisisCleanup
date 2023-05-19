module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://app.staging.crisiscleanup.io/login?from=/',
    specPattern:'cypress/e2e/integration/*.cy.js'
    

  },
  "chromeWebSecurity": false
};
