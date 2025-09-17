
export class CustomerAccountPage{

    assertSuccessCustomerLogin(user, email){
    
    cy.url().should('include', 'customer/account/')
    cy.title().should('include', 'My Account')
    cy.get('[class="block block-dashboard-info"]').then( info => {
        cy.wrap(info).should('contain', user)
        cy.wrap(info).should('contain', email)
        })
    }

    navigateToTab(tabName, assertUrl){
        cy.get('.items .nav.item').contains(tabName).click()
        cy.get('.items .nav.item').contains(tabName).parent().then( tab => {
            cy.wrap(tab).should('have.class', 'current')
        })
        cy.url().should('include', assertUrl)
    }

    removeProductFromWishList(){
        cy.wait(2000)
        cy.get('[title="Remove Item"]').eq(0).click()
    }
}

export const onCustomerAccountPage = new CustomerAccountPage()