
export class adminSignInPage{

    submitSignInForm(userName, password){
        cy.get('#login-form').then( form => {
            cy.wrap(form).find('#username').type(userName)
            cy.wrap(form).find('#login').type(password)
            cy.wrap(form).submit()            
        })
        cy.contains('h1.page-title', 'Dashboard')
    }
}

export const onAdminSignInPage = new adminSignInPage()