///<reference types="cypress"/>

const { onHomePage } = require("../../support/page_objects/homePage")


describe('Main Menu Navigation', () => {
   beforeEach('open application', () => {
      cy.openHomePage()
   })

   it('navigate To Pistols Categoty page', () => {
      onHomePage.navigateToProductsMenus(
         'Pistols', 
         'pistols', 
         'Pistols | Daniel Defense')
   })

   it('navigate To Usage Categoty page', () => {
      onHomePage.navigateToMainMenuCategoriesWithoutDropdown(
       'Usage', 
       'usage', 
       'Usage | Daniel Defense')
   })

   it('navigate To Financing Categoty page', () => {
      onHomePage.navigateToSupportMenus(
         'Financing', 
         'daniel-defense-financing', 
         'Shooting Sports Financing | Daniel Defense')
   })

   it('navigate To DD Gear Categoty page', () => {
      onHomePage.navigateToMainMenuDdGearCategory(
         'DD Gear', 
         'https://danieldefensestore.com/', 
         'Daniel Defense Store')
   })

   it('navigate To Blog', () => {
      onHomePage.navigateToMainMenuCategoriesWithoutDropdown(
         'Blog', 
         'wire', 
         'DD Wire | Daniel Defense')
   })

   it('navigate To Company Values', () => {
      onHomePage.navigateToAboutMenus(
         'Company Values', 
         'company-values', 
         'Company Values | Daniel Defense')
   })

})