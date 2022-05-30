// Para que funcionen los comandos de Cypress se debe colocar la función abajo:
/// <reference types="cypress" />

describe("Función pageUp y pageDown", () =>{

    it("pageUp ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").type('{pageup}')
        cy.get("#userEmail").type('{pagedown}')
    })

    it.only("Segundo ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userName").type('{pageup}')
            })

    it.only("Ultimo ", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("#userEmail").type('{pagedown}')
    })

})//Cierre de describe