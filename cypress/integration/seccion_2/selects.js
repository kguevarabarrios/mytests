/// <reference types="cypress" />
require('cypress-plugin-tab') //Activador de plugin "tab"
require('cypress-xpath') //Activador de plugin para selector "xpath"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("", () =>{

        it("Selects Demo", () =>{
            cy.visit("https://demo.anhtester.com/basic-select-dropdown-demo.html")
            cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
            cy.get('#select-demo').should("be.visible").select("Monday").should("have.value","Monday")
        })

        it("Multi Select", () =>{
            cy.visit("https://demo.anhtester.com/basic-select-dropdown-demo.html")
            cy.title().should('eq','Selenium Easy Demo - Automate All Scenarios')
            cy.get("#multi-select").should("be.visible").select(["California","New York"])
        })

        it("Multi Select Reto", () =>{
            cy.visit("https://demo.anhtester.com/jquery-dual-list-box-demo.html")
            cy.title().should('eq','Selenium Easy - JQuery Dual List Box Demo')
            cy.get(':nth-child(1) > .form-control').select(["Isis","Manuela"]).then(()=>{
            cy.get('.pAdd').should("be.visible").click()
            cy.get(':nth-child(3) > .form-control').should("be.visible").select(["Isis","Manuela"])
            cy.get('.pRemove').should("be.visible").click()
        })

                  
    })

    it.only("Selects Adicional", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html")
        cy.title().should('eq','HTML Form Elements')
        cy.get('[multiple="multiple"]').should("be.visible").select("ms2").should("contain","Selection Item 2")
    })

})//Cierre de describe