/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
 
  "defaultCommandTimeout": 3000,	
  "env": {
    "TAGS": "not @ignore",
    "allure": true
  },

  e2e: {
    baseUrl: "https://www.demoblaze.com",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      allureWriter(on, config);
      return config;
    },

  },
};