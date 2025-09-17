

export class CustomerLoginPage{

    submitCustomerLoginForm(email, password){
        cy.get('.column.main').find('form').then( form => {
            cy.wait(500)
            cy.wrap(form).find('#email').click().type(email)
            cy.wrap(form).find('[name="login[password]"]').click().type(password)
            cy.wrap(form).submit()
    })
}

    navigateToCreateAnAccountPage(){
        cy.contains('span', 'Create an Account').click()
    }

    navigateToForgotYourPasswordPage(){
        cy.contains('span', 'Forgot Your Password?').click()
    }

    assertAddToWishlistMessage(message){
        cy.get('.page.messages')
        .contains(message)
        .should('be.visible')
    }


}

export const onCustomerLoginPage = new CustomerLoginPage()