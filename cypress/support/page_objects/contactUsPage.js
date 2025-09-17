

export class contactUsPage{

    //Right solution but doesn't work
    submitContactUsForm(firstName, lastName, testemail, address, city, zip, phone, subject, comment){
        cy.get('.dd-custom-form').find('form').then( form => {
            cy.wrap(form).find('#name').should('be.visible').type(firstName)
            cy.wrap(form).find('#email').should('be.visible').type(testemail)
            cy.wrap(form).find('#street').type(address)
            cy.wrap(form).find('#city').type(city)
            cy.wrap(form).find('#state').select('Washington')
            cy.wrap(form).find('#zip').type(zip)
            cy.wrap(form).find('#phone').type(phone)
            cy.wrap(form).find('#department').should('be.visible').select(1)
            cy.wrap(form).find('#comment').type(comment)
            cy.wrap(form).submit()

            cy.wait(500)
        })
    }

    assertSuccessContactUsForm(){
        cy.contains('div', 'Your form was submitted successfully!').should('be.visible')
    }
}

export const onContactUsPage = new contactUsPage()