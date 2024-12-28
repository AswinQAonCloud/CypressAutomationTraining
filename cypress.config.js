const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });
    },
  },
});


const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Register the downloadFile task
      on('task', { downloadFile })
      return config
    },
  },
}
