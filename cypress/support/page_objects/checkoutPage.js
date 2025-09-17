

export class checkoutPage{


    selectShippingMethod(){
        cy.wait(2000)
        cy.get('#checkout-step-shipping_method').find('form').then( form => {
            cy.wrap(form).find('[data-bind="click: element.selectShippingMethod"]').contains('Fixed').click()
            cy.wrap(form).submit()
        })
    }

    fillAndSubmitCreditCardForm(nameOnCard, creditCardNumber, ccMonth, ccYear, cvv){
        cy.get('[class="payment-method _active"]').find('form').then( form => {
            cy.wrap(form).find('[name="payment[cc_owner]"]').type(nameOnCard)
            cy.wrap(form).find('[name="payment[cc_number]"]').type(creditCardNumber)
            cy.wrap(form).find('[name="payment[cc_exp_month]"]').select(ccMonth)
            cy.wrap(form).find('[name="payment[cc_exp_year]"]').select(ccYear)
            cy.wrap(form).find('[name="payment[cc_cid]"]').type(cvv)
            //cy.wrap(form).submit()
            cy.get('.action.primary.checkout').contains('Place Order').click()
        })
    }
}

export const onCheckoutPage = new checkoutPage()