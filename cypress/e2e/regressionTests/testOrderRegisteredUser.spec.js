
///<reference types="cypress"/>

import { onCheckoutPage } from "../../support/page_objects/checkoutPage"
import { onCustomerLoginPage } from "../../support/page_objects/customerLoginPage"
import { onHomePage } from "../../support/page_objects/homePage"
import { onProductDetailsPage } from "../../support/page_objects/productDetailsPage"
import { onProductListPage } from "../../support/page_objects/productListPage"
import { onShoppingCartPage } from "../../support/page_objects/shoppingCartPage"
import { onSuccessPage } from "../../support/page_objects/successOrderPage"

describe('Check Test Order Registered User', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
     })

     it.skip('order succes', () => {
        //onHomePage.closeNewsletterPopup()
        onHomePage.navigateToLoginPage()
        onCustomerLoginPage.submitCustomerLoginForm(
            Cypress.env('registeredEmail'), 
            Cypress.env('password'))
        onHomePage.navigateToRiflessCategory()
        onProductListPage.navigateToProductPage()
        onHomePage.removeProductsFromMiniCartIfAvailable()
        onProductDetailsPage.addProductToCart()
        onProductDetailsPage.navigateToShoppingCart()

        onShoppingCartPage.navigateToCheckoutPage()
        onCheckoutPage.selectShippingMethod()
        onCheckoutPage.fillAndSubmitCreditCardForm(
            Cypress.env('nameOnCard'), 
            Cypress.env('creditCardNumber'), 
            Cypress.env('ccMonth'), 
            Cypress.env('ccYear'), 
            Cypress.env('cvv'))
        onSuccessPage.assertSuccessfullyPlacedOrder()
     })
})