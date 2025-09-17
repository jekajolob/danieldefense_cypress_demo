///<reference types="cypress"/>

const { onAdminAllCustomersPage } = require("../../support/page_objects/admin_panel/adminAllCustomersPage")
const { onAdminDashboardPage } = require("../../support/page_objects/admin_panel/adminDashboardPage")
const { onCustomerAccountCreatePage } = require("../../support/page_objects/customerAccountCreatePage")
const { onCustomerLoginPage } = require("../../support/page_objects/customerLoginPage")
const { onHomePage } = require("../../support/page_objects/homePage")

describe('Create New User Account', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
     })

     it('create new user success', () => {
        //onHomePage.closeNewsletterPopup()
        onHomePage.navigateToLoginPage()
        onCustomerLoginPage.navigateToCreateAnAccountPage()
        onCustomerAccountCreatePage.submitCreateAccountForm(
         Cypress.env('firstName'), 
         Cypress.env('lastName'), 
         Cypress.env('newEmail'), 
         Cypress.env('password'))
     })

     afterEach('remove new user from admin panel', () =>{
      cy.loginToAdminPanel()
      onAdminDashboardPage.closePopUpNotification()
      onAdminDashboardPage.navigateToAllCustomersPage()
      onAdminAllCustomersPage.filterByCustomerEmail(Cypress.env('newEmail'))
      onAdminAllCustomersPage.removeEmailFromGrid(Cypress.env('newEmail'))
     })
})