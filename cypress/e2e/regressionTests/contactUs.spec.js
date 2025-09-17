
///<reference types="cypress"/>

import { onContactUsPage } from "../../support/page_objects/contactUsPage"
import { onHomePage } from "../../support/page_objects/homePage"

describe('Contact Us', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
     })

     it('submit contact us form success', () => {
            onHomePage.navigateToFooterLinks(
                'Contact Us',
                'contacts',
                'Contact Us | Daniel Defense'
             )
        onContactUsPage.submitContactUsForm(
            Cypress.env('firstName'), 
            Cypress.env('lastName'), 
            Cypress.env('registeredEmail'), 
            Cypress.env('streetAddress'),
            Cypress.env('city'),
            Cypress.env('zip'),
            Cypress.env('phoneNumber'),
            Cypress.env('subject'),
            Cypress.env('whatsOnYourMind'))
        onContactUsPage.assertSuccessContactUsForm()
     })
})