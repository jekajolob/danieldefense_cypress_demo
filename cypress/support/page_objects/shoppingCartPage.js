

export class ShoppingCartPage{

    navigateToCheckoutPage(){
        cy.wait(1000)
        cy.get('[class="cart-summary"]').contains('Proceed to Checkout').should('be.visible').click()
    }
}

export const onShoppingCartPage = new ShoppingCartPage()