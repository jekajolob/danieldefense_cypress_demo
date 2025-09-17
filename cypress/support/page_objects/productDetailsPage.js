
export class ProductDetailsPage{

    addProductToCart(){
        cy.get('#product-addtocart-button').should('be.visible').click()
        cy.get('[data-ui-id="message-success"]').should('contain', 'You added')
        
    }

    navigateToShoppingCart(){
        /* cy.get('#top-cart-btn-checkout').click() */
        cy.get('.action.viewcart').click({force: true})

    }
}

export const onProductDetailsPage = new ProductDetailsPage()