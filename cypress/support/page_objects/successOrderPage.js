

export class successPage{

    assertSuccessfullyPlacedOrder(){
        cy.wait(1000)
            cy.get('.user-logged-in-success.mf-initial').should('contain', 'Thank you!')
            cy.get('.checkout-success.mf-initial').should('contain', 'Your order #:')        
    }
}
export const onSuccessPage = new successPage()