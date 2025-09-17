const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  experimentalModifyObstructiveThirdPartyCode: true, //Cross-origin execution
  experimentalWebKitSupport: true, //Enable Safari browser
  defaultCommandTimeout: 15000, //default command load timeout
  chromeWebSecurity: false, //turn off Chrome web sucurity(for iframes)
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // test file format ex:firstTest.spec.js
    excludeSpecPattern: [
      '**/1-getting-started/*',
      '**/2-advanced-examples/*',
      '**/loginOutlook.spec.js',
      '**/homepage',
    ], // exclude example Cypress test folders and scripts
    experimentalRunAllSpecs: true, // turn on button on UI > Run all tests
  },
  env: {
    // base site URL
    baseUrl: '',

    newEmail: ``,
    registeredEmail: '',
    password: '',

    //Contact Us form data
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    zip: '',
    phoneNumber: '',
    subject: '',
    whatsOnYourMind: '',

    //admin
    baseAdminUrl: '',
    adminUserName: '',
    adminPassword: '',

    //Credit card data
    nameOnCard: '',
    creditCardNumber: '',
    ccMonth: '',
    ccYear: '',
    cvv: '',
  },
})
