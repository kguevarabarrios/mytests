/// <reference types="cypress" />
require('cypress-plugin-tab') //Activador de plugin "tab"
require('cypress-xpath') //Activador de plugin para selector "xpath"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Segundo Reto", () =>{

    it("Segundo Reto", () =>{
        cy.visit("http://computer-database.gatling.io/computers")
        cy.title().should('eq','Computers database')
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("AN/FSQ-32")
        cy.xpath("//input[contains(@id,'searchsubmit')]").should("be.visible").click()
        cy.get('#add').should("be.visible").click()
        cy.xpath("//input[contains(@id,'name')]").should("be.visible").type("Altair").tab().
        type("2000-01-01").tab().type("2010-01-01")
        cy.get('#company').should("be.visible").select("Sun Microsystems").should("have.value","38")
        cy.get('.primary').should("be.visible").click()
        cy.xpath("//input[contains(@id,'searchbox')]").should("be.visible").type("Altair")
        cy.get('#searchsubmit').should("be.visible").click()

    })

})//Cierre de describe