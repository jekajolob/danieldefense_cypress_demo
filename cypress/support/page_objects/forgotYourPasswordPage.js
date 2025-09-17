

export class ForgotYourPasswordPage{
    submitForgotYourPasswordForm(email){
        cy.get('#maincontent').find('form').then( form => {
            cy.wrap(form).find('#email_address').clear().type(email)
            cy.wrap(form).submit()
            cy.wait(1000)
            
            cy.get('body').then($body => {
                if ($body.find('div[class="message-error error message"]').length > 0) {   
                    cy.get('div').should('contain', 'We received too many requests for password resets. Please wait and try again later or contact info@nosler.com.stg.')
                }else{
                    cy.wait(500)
                    cy.get('div').should('contain', `If there is an account associated with ${email} you will receive an email with a link to reset your password.`)
                }
            })            
        })
    }
}

export const onForgotYourPasswordPage = new ForgotYourPasswordPage()