///<reference types="cypress"/>

const { onHomePage } = require("../../support/page_objects/homePage")


describe('Newsletter Subscription Already Subscribed', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
     })

     it('already subscribed', () => {
        //onHomePage.closeNewsletterPopup()
        onHomePage.submitNewsletterSubscriptionField(Cypress.env('registeredEmail'))
        onHomePage.assertNewsletterSubscriptionAlert('This email address is already subscribed.')
     })
})