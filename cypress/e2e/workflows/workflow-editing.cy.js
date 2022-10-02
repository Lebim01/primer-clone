/// <reference types="cypress" />

const openFlow = () => {
  cy.intercept('GET', '**/api/workflow/*').as('getWorkflow')
  cy.intercept('GET', '**/api/workflow/*/nodes').as('getNodes')

  cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.h-full.w-full.overflow-auto > div > div:nth-child(3) > div > div:nth-child(1) > a")
  .click()

  // valid requests
  cy.wait('@getWorkflow').its('response.statusCode').should('be.oneOf', [200, 304])
  cy.wait('@getNodes').its('response.statusCode').should('be.oneOf', [200, 304])
}

const addCondition = () => {
  const addFilterCardScheme = () => {
    cy.get("button")
      .contains("Card Scheme")
      .click()

    cy.get(".modal .selector-value .select-input")
      .click()

    cy.get(".modal .selector-value .select-values")
      .should("be.visible")

    cy.get("button")
      .contains("Card Scheme")
      .should("be.disabled")
  }

  const pickOption = (value = "Visa") => {
    // pick an option
    cy.get(".modal .selector-value .select-values")
      .contains(value)
      .click()

    // value selected
    cy.get(".modal .selector-value .select-input")
      .should("contain", value)
  }

  // add condition
  cy.get(".btn-add-condition")
    .click()

  cy.get(".modal")
    .should("be.visible")

  addFilterCardScheme()
  pickOption("Visa")

  // remove filter
  cy.get(".remove-filter")
    .click()
  
  addFilterCardScheme()
  pickOption("Visa")

  // save
  cy.get(".modal button").contains("Done")
    .click()

  cy.get(".react-flow__node").should("contain", "CONDITION").and("contain", "Visa")
}

const addAppTrigger = () => {
  cy.get(".app-trigger:first")
    .click()

  cy.get(".app-trigger-action").contains("Authorize User")
    .click()

  cy.get(".react-flow__node").should("contain", "PAYMENTS").and("contain", "Authorize User")
}

const publish = () => {
  cy.get("button.btn-primary").contains("Publish")
    .click()
  
  cy.get(".modal").should("be.visible")

  cy.get(".modal button").contains("Confirm")
    .click()
  
  cy.get(".modal span").contains("Successfully published")
    .should("be.visible")
  
  cy.get(".modal").should("not.exist")
}

context('Workflow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/workflows')
  })

  it('open a flow', () => {
    openFlow()

    // valid workflow name
    cy.get("#__next > div > div.flex.max-h-screen.w-full.flex-col.overflow-hidden > div.flex.border-b.p-6 > div.flex.flex-1.items-center.gap-3 > a:nth-child(4) > span")
      .should("be.visible")
      .should("have.length.above", 0)

    cy.get(".react-flow__node")
      .should("be.visible")
      .should("have.length.above", 0)
  })

  it('add triggers to flow and publish', () => {
    openFlow()

    // expand side menu
    cy.get(".toggle-side-menu")
      .click()

    addCondition()

    addAppTrigger()

    publish()
  })
})
