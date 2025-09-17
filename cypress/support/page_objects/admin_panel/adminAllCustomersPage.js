
export class adminAllCustomersPage{

    filterByCustomerEmail(email){
        cy.wait(5000)
        cy.get('.data-grid').should('be.visible');
        cy.get('.action-default').contains('Filters').click({force: true})
        cy.get('.admin__data-grid-filters-wrap').then( filters => {
            cy.wrap(filters).find('[name="email"]').clear().type(email)
            cy.wrap(filters).contains('Apply Filters').click()
        })

    }

    removeEmailFromGrid(email){
        cy.get('table[class="data-grid data-grid-draggable"]').then( table => {
            cy.wrap(table).find('.data-grid-cell-content').contains(email).click()
        })
        cy.get('button[class="action-select"]').contains('Actions').click()
        cy.get('.action-menu-item').contains('Delete').click()
        cy.get('button[class="action-primary action-accept"]').contains('OK').click()
        cy.get('#messages').should('contain', 'A total of 1 record(s) were deleted.')

    }
}

export const onAdminAllCustomersPage = new adminAllCustomersPage()