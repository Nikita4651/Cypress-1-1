const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 2,
 // allowCypressEnv: false,
  

  viewportWidth: 400,
  viewportHeight: 800,

  e2e: {
   // supportFile: "cypress/support/e2e.js",
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
  
    },
  },
});