
///<reference types="cypress"/>

import { onProductListPage } from "../../support/page_objects/productListPage"


describe('Navigate To PDP', () => {
    beforeEach('open application', () => {
        cy.visit(Cypress.env('baseUrl') + '/accessories.html')
     })

     it('navigate to PDP success', () => {
        onProductListPage.navigateToProductPage('SoundGuard')
     })
})