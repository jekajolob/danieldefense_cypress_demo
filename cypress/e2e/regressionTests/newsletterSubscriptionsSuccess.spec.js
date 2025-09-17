///<reference types="cypress"/>

const { onAdminDashboardPage } = require("../../support/page_objects/admin_panel/adminDashboardPage")
const { onAdminNewsletterSubscribersPage } = require("../../support/page_objects/admin_panel/adminNewsletterSubscribersPage")
const { onHomePage } = require("../../support/page_objects/homePage")


describe('Newsletter Subscription', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
     })

     it('subsription success', () => {
        //onHomePage.closeNewsletterPopup()
        onHomePage.submitNewsletterSubscriptionField(Cypress.env('newEmail'))
        onHomePage.assertNewsletterSubscriptionAlert('Thank you for your subscription.')
     })

     after('remove newsletter new user from admin panel', () =>{
      cy.loginToAdminPanel()
      onAdminDashboardPage.closePopUpNotification()
      onAdminDashboardPage.navigateToNewsletterSubscribersPage()
      onAdminNewsletterSubscribersPage.removeEmailFromGrid(Cypress.env('newEmail'))

     })
})