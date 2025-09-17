
///<reference types="cypress"/>

import { onCustomerAccountPage } from "../../support/page_objects/customerAccountPage"
import { onCustomerLoginPage } from "../../support/page_objects/customerLoginPage"
import { onHomePage } from "../../support/page_objects/homePage"
import { onProductListPage } from "../../support/page_objects/productListPage"


describe('Add Product To WishList Logged In User', () => {
    beforeEach('open application', () => {
      cy.openHomePage()
      cy.loginToAccount() 
      cy.visit(Cypress.env('baseUrl') + '/accessories.html')
     })

     it('add Product To WishList Registered User Success', () => {
      onProductListPage.checkAddToWishList()
      onCustomerLoginPage.assertAddToWishlistMessage('has been added to your Wish List')
      onCustomerAccountPage.removeProductFromWishList()
      onCustomerLoginPage.assertAddToWishlistMessage('has been removed from your Wish List')


   })
})