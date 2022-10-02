/// <reference types="cypress" />

context('Network Requests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/workflows')
  })

  it('intercept - active endpoints', () => {
    cy.intercept('GET', '**/api/flow/checkout?status=active').as('getCheckouts')
    cy.intercept('GET', '**/api/flow/payment?status=active').as('getPayments')
    cy.intercept('GET', '**/api/app?type=app&status=active').as('getApps')

    cy.wait('@getCheckouts').its('response.statusCode').should('be.oneOf', [200, 304])
    cy.wait('@getPayments').its('response.statusCode').should('be.oneOf', [200, 304])
    cy.wait('@getApps').its('response.statusCode').should('be.oneOf', [200, 304])

    const checkoutContainer = cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.h-full.w-full.overflow-auto > div > div:nth-child(3) > div > div:nth-child(1)")
    checkoutContainer.should('be.visible').and('have.length.above', 0)

    const paymentsContainer = cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.h-full.w-full.overflow-auto > div > div:nth-child(4) > div > div:nth-child(1)")
    paymentsContainer.should('be.visible').and('have.length.above', 0)

    const appsContainer = cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.h-full.w-full.overflow-auto > div > div:nth-child(5) > div")
    appsContainer.should('be.visible').and('have.length.above', 0)
  })

  it('intercept - inactive endpoints', () => {
    cy.intercept('GET', '**/api/flow/checkout?status=inactive').as('getCheckouts')
    cy.intercept('GET', '**/api/flow/payment?status=inactive').as('getPayments')
    cy.intercept('GET', '**/api/app?type=app&status=inactive').as('getApps')

    // toggle status
    cy.get(".toggle-status:nth-child(2)")
      .click()  

    cy.wait('@getCheckouts').its('response.statusCode').should('be.oneOf', [200, 304])
    cy.wait('@getPayments').its('response.statusCode').should('be.oneOf', [200, 304])
    cy.wait('@getApps').its('response.statusCode').should('be.oneOf', [200, 304])

    const checkoutContainer = cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.h-full.w-full.overflow-auto > div > div:nth-child(3) > div > div:nth-child(1)")
    checkoutContainer.should('be.visible').and('have.length.above', 0)

    const paymentsContainer = cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.h-full.w-full.overflow-auto > div > div:nth-child(4) > div > div:nth-child(1)")
    paymentsContainer.should('be.visible').and('have.length.above', 0)

    const appsContainer = cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.h-full.w-full.overflow-auto > div > div:nth-child(5) > div")
    appsContainer.should('be.visible').and('have.length.above', 0)
  })

  it('open a flow', () => {
    cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.h-full.w-full.overflow-auto > div > div:nth-child(3) > div > div:nth-child(1) > a")
      .click()

    cy.get(".react-flow").should('be.visible')
  })
})
