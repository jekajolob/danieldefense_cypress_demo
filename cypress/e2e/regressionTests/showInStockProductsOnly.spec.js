
///<reference types="cypress"/>

import { onProductListPage } from "../../support/page_objects/productListPage"


describe('Show In Stock Products Only', () => {
    beforeEach('open application', () => {
      cy.visit(Cypress.env('baseUrl') + '/accessories.html')
     })

     it('check Show In Stock Products Only success', () => {
        onProductListPage.checkShowInStockProductsOnly()
     })
})