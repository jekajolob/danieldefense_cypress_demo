///<reference types="cypress"/>

const { onCustomerAccountPage } = require("../../support/page_objects/customerAccountPage")
const { onCustomerLoginPage } = require("../../support/page_objects/customerLoginPage")
const { onHomePage } = require("../../support/page_objects/homePage")

describe('User Login', () => {
   beforeEach('open application', () => {
      cy.openHomePage()
   })

   it('login success', () => {
      cy.loginToAccount()
   })
})
