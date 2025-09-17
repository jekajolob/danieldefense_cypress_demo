///<reference types="cypress"/>

const { onCustomerLoginPage } = require("../../support/page_objects/customerLoginPage")
const { onForgotYourPasswordPage } = require("../../support/page_objects/forgotYourPasswordPage")
const { onHomePage } = require("../../support/page_objects/homePage")

describe('Forgot Your Password', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
     })

     it('Password reset success', () => {
        //onHomePage.closeNewsletterPopup()
        onHomePage.navigateToLoginPage()
        onCustomerLoginPage.navigateToForgotYourPasswordPage()
        onForgotYourPasswordPage.submitForgotYourPasswordForm(Cypress.env('registeredEmail'))
     })
})