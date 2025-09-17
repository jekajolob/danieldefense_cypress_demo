
///<reference types="cypress"/>

import { onProductListPage } from "../../support/page_objects/productListPage"


describe('Filters Results', () => {
    beforeEach('open application', () => {
      cy.visit(Cypress.env('baseUrl') + '/accessories.html')
     })

     it('check filters results', () => {
        onProductListPage.checkFilters()
     })
})