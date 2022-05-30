/// <reference types="cypress" />
require('cypress-plugin-tab') //Activador de plugin "tab"
require('cypress-xpath') //Activador de plugin para selector "xpath"
import 'cypress-file-upload'; //Activador de plugin para "upload-files"
require('@4tw/cypress-drag-drop') //Activador de plugin para "drag-and-drop"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Manejo de los Alias", () =>{

    it("Alias 1", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")
        
        cy.get('#firstname').should("be.visible").as("nombre")
        cy.get("@nombre").type("Kilian")

        cy.get('#surname').should("be.visible").as("apellido")
        cy.get("@apellido").type("Guevara")

        cy.get('#age').should("be.visible").as("edad")
        cy.get("@edad").type("38")

        cy.get('#country').should("be.visible").as("pais")
        cy.get("@pais").select("Venezuela")

        cy.get('#notes').should("be.visible").as("notas")
        cy.get("@notas").type("Ingeniero de Sistemas")

        cy.xpath("//input[contains(@type,'submit')]").click({force:true})
    })

})//Cierre de describe