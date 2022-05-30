// Para que funcionen los comandos de Cypress se debe colocar la función abajo:
/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe(" ", () =>{

    it("Test de validar título", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").type("Kilian Guevara")
        cy.get("#userEmail").type("user@dominio.com")
        //cy.get(".btn").click()


       // cy.visit("https://www.google.co.ve")
        // cy.title().should('eq','Google')

        // cy.get("[role='combobox']").type("cypress io {enter}")


    })

})//Cierre de describe