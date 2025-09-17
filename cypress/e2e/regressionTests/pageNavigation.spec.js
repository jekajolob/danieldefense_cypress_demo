
///<reference types="cypress"/>

import { onCustomerAccountPage } from "../../support/page_objects/customerAccountPage"
import { onCustomerLoginPage } from "../../support/page_objects/customerLoginPage"
import { onHomePage } from "../../support/page_objects/homePage"
import { onProductListPage } from "../../support/page_objects/productListPage"


describe('Page Navigation', () => {
    beforeEach('open application', () => {
        cy.visit(Cypress.env('baseUrl') + '/accessories.html')
     })

     it('redirect to the next page success', () => {
        onProductListPage.checkPageNavigation('2')
     })
})