// Para que funcionen los comandos de Cypress se debe colocar la función abajo:
/// <reference types="cypress" />
// **Los Asserts son fuciones que ayudan a validar que los campos existen antes de proceder
// con toda la prueba**
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Introducción a los Asserts", () =>{

    it("Demo con los Asserts", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get('#firstName').should("be.visible").type("Kilian")
        cy.get('#lastName').should("be.visible").type("Guevara")
        cy.get('#userEmail').should("be.visible").should("be.enabled").type("porfin@nojoda.com")
    })

})//Cierre de describe