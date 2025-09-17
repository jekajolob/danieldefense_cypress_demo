
///<reference types="cypress"/>

import { onCustomerAccountPage } from "../../support/page_objects/customerAccountPage"
import { onCustomerLoginPage } from "../../support/page_objects/customerLoginPage"
import { onHomePage } from "../../support/page_objects/homePage"
import { onProductListPage } from "../../support/page_objects/productListPage"


describe('Add Product To WishList Not Registered User', () => {
    beforeEach('open application', () => {
        cy.visit(Cypress.env('baseUrl') + '/accessories.html')
     })

     it('add Product To WishList Not Registered User Success', () => {
        onProductListPage.checkAddToWishList()
        onCustomerLoginPage.assertAddToWishlistMessage('You must login or register to add items to your wishlist.')
     })
})