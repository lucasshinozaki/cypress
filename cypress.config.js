const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7pgnhh",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestam: "mmddyyyy_HHMMss"
    }
  },
});
