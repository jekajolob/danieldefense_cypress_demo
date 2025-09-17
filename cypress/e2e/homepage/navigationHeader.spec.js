///<reference types="cypress"/>

const { onHomePage } = require("../../support/page_objects/homePage")


describe('Header Navigation', () => {
   beforeEach('open application', () => {
      cy.openHomePage()
   })

   it('navigate To Dealer Locator Page', () => {
      onHomePage.navigateToDealerLocatorPage('Dealer Locator', 'dealers/', 'Store Locator | Daniel Defense')
   })

   it('navigate To Sign In page', () => {
      onHomePage.navigateToLoginPage('customer/account/login/')
   })

   it('navigate To Search Page', () => {
      onHomePage.navigateToSearchPage(
         'Rifles',
         '/catalogsearch/result',
         'Search results for: \'Rifles\' | Daniel Defense')
   })
})