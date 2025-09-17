
export class adminDashboardPage{

    //Conditional click for modals
    closePopUpNotification(){
        cy.get('.modals-wrapper').then( modal => {
        cy.wrap(modal).find('.modal-popup').invoke('attr', 'class').then( attr => {
            if( attr.includes('show')){
                cy.contains('span', 'Close').click({force:true})
            }
        })
    })
    }

    navigateToAllCustomersPage(){
        cy.wait(2000)
        cy.get('#nav').contains('Customers').click()
        cy.get('.item-customer-manage').contains('All Customers').should('be.visible').click()
    }

    navigateToNewsletterSubscribersPage(){
        cy.wait(2000)
        cy.get('#nav').contains('Marketing').click()
        cy.get('.item-marketing-communications').contains('Newsletter Subscribers').should('be.visible').click()
    }
}

export const onAdminDashboardPage = new adminDashboardPage()