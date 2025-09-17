/* 
const uuid = () => Cypress._.random(0, 1e5)
const id = uuid()
const testemail = `qa10autouser${id}@binaryanvil.com` */

export class customerAccountCreatePage{

    submitCreateAccountForm(firstName, lastName, email, password){
        cy.get('#maincontent').find('form').then( form => {
            cy.wrap(form).find('#firstname').click().type(firstName)
            cy.wrap(form).find('#lastname').click().type(lastName)
            cy.wrap(form).find('#email_address').click().type(email)
            //cy.wrap(form).find('#confirm_email_address').type(email)
            cy.wrap(form).find('#password').click().type(password)
            cy.wrap(form).find('#password-confirmation').click().type(password)
            cy.wrap(form).submit()
            cy.wait(500)
            cy.get('[class="message-success success message"]')
            .should('contain', 'Thank you for registering with Daniel Defense.')
        })
    }
}

export const onCustomerAccountCreatePage = new customerAccountCreatePage()