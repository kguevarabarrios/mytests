// Para que funcionen los comandos de Cypress se debe colocar la función abajo:
/// <reference types="cypress" />
require('cypress-plugin-tab')
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Click Sencillo", () =>{

    it("Click Sencillo", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
        cy.get('#txtUsername').should("be.visible").type("Admin").tab().type("admin123")
        cy.get('#btnLogin').should("be.visible").click()
        cy.get('#menu_admin_viewAdminModule > b').click()

    })

    it("Click Force True", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
        cy.get('#txtUsername').should("be.visible").type("Admin").tab().type("admin123")
        cy.get('#btnLogin').should("be.visible").click({force: true})
        cy.get('#menu_admin_viewAdminModule > b').click()

    })

    it.only("Click por Coordenadas", () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
        cy.get('#txtUsername').should("be.visible").type("Admin").tab().type("admin123")
        cy.get('#btnLogin').should("be.visible").click({force: true})
        cy.get('[href="http://www.orangehrm.com/"] > img').click(5,5)
        cy.get('[href="http://www.orangehrm.com/"] > img').click(10,5)

    })

})//Cierre de describe