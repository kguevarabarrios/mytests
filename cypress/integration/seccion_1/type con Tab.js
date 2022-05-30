// Para que funcionen los comandos de Cypress se debe colocar la función abajo:
/// <reference types="cypress" />
require('cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Función Tab", () =>{
    it("Type con Tab", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get('#firstName').type("Kilian").tab().
        type("Guevara").tab().
        type("kilian@gmail.com")
    })

})//Cierre de describe