// Para que funcionen los comandos de Cypress se debe colocar la función abajo:
/// <reference types="cypress" />
require('cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Primer Reto", () =>{

    it("Primer Reto", () =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq','ToolsQA')
        cy.get('#searchBox').should("be.visible").type("Alden")
        cy.get('#delete-record-2 > svg > path').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').should("be.visible").type("Kilian").tab().
        type("Guevara").tab().type("kilian@gmail.com").tab().type("38").tab().
        type("500").tab().type("Security Department")
        cy.get('#submit').should("be.visible").click({force: true})
        cy.get('#searchBox').clear()
        cy.get('#searchBox').type("Kilian")
        cy.get('#edit-record-3 > svg').click()
        cy.get('#lastName').clear()
        cy.get('#lastName').type("Guevara Barrios")
        cy.get('#submit').click()
        cy.get('#searchBox').clear()
       
        
    })

})//Cierre de describe