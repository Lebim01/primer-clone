/// <reference types="cypress" />

context('Workflow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/checkout')
  })

  it('toggle payment methods', () => {
    // toggle one
    cy.get(".tabs .tab-content .toggle-payment-method:contains('Paypal') .switch")
      .click()
    
    cy.get(".checkout button.btn-checkout-paypal")
      .should("be.visible")

    cy.get(".tabs .tab-content .toggle-payment-method:contains('Paypal') .switch")
      .click()
    
    cy.get(".checkout button.btn-checkout-paypal")
      .should("not.exist")

    // toggle all
    cy.get(".tabs .tab-content .toggle-payment-method .switch")
      .click({
        multiple: true
      })
    
    cy.get(".checkout .btn-checkout")
      .should("have.length", 5)

    // toggle all
    cy.get(".tabs .tab-content .toggle-payment-method .switch")
      .click({
        multiple: true
      })

    cy.get(".checkout .btn-checkout")
      .should("not.be.visible")
  })
})
