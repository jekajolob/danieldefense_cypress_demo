
export class adminNewsletterSubscribersPage{

    removeEmailFromGrid(email){
        cy.get('#subscriberGrid_table').then( table => {
            cy.wrap(table).find('#subscriberGrid_filter_email').clear().type(`${email}{enter}`)
            cy.wrap(table).get('[class=" ccol-email col-email  "]').contains(email).click()
        })
        cy.get('#subscriberGrid_massaction-select').select('Delete')
        cy.get('.admin__grid-massaction-form').find('[title="Submit"]').click()

        //cy.get('.action-menu-item').contains('Delete').click()
        cy.get('button[class="action-primary action-accept"]').contains('OK').click()
        cy.get('#messages').should('contain', 'Total of 1 record(s) were deleted.')
    }
}

export const onAdminNewsletterSubscribersPage = new adminNewsletterSubscribersPage()