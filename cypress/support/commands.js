/// <reference types="cypress" />

const { on } = require("commander")
const { onAdminSignInPage } = require("./page_objects/admin_panel/adminSignInPage")
const { onHomePage } = require("./page_objects/homePage")
const { onCustomerLoginPage } = require("./page_objects/customerLoginPage")
const { onCustomerAccountPage } = require("./page_objects/customerAccountPage")

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//
//
// -- Skip 'uncaught:exception'
Cypress.on('uncaught:exception', (err, runnable) => {

    // returning false here prevents Cypress from    

    // failing the test    
    
    return false
})
//
//
// -- Home Page navigation
Cypress.Commands.add('openHomePage', () => {
    cy.visit(Cypress.env('baseUrl'))
})
//
//
//
Cypress.Commands.add('loginToAccount', () => {
    onHomePage.navigateToLoginPage()
onCustomerLoginPage.submitCustomerLoginForm(
   Cypress.env('registeredEmail'),
   Cypress.env('password'))
onHomePage.navigateToMyAccountPage()
onCustomerAccountPage.assertSuccessCustomerLogin(
   Cypress.env('firstName'),
   Cypress.env('registeredEmail'))
})
//
//
//
//
// -- Admin panel navigation
Cypress.Commands.add('loginToAdminPanel', () => {
    cy.visit(Cypress.env('baseAdminUrl'))
    onAdminSignInPage.submitSignInForm(Cypress.env('adminUserName'), Cypress.env('adminPassword'))
})
//
//
// -- Click to Google captcha
Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
    // Wait until the iframe (Google reCAPTCHA) is totally loaded
    cy.wait(500);
    cy.get('.g-recaptcha *> iframe')
      .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('.recaptcha-checkbox-border')
          .should('be.visible')
          .click();
      });
  });