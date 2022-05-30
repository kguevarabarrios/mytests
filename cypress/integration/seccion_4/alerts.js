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

describe("Alertas", () =>{

    it("Alerta 1", () =>{
        cy.visit("https://demo.anhtester.com/bootstrap-modal-demo.html")
        cy.title().should("eq","Selenium Easy Demo - Bootstrap Modal Demo to Automate")
        //Presionando Save changes
        cy.xpath("//a[@href='#myModal0']").click()
        cy.xpath("(//a[@href='#'])[17]").click()
        //Presionando Close
        cy.wait(1000)
        cy.xpath("//a[@href='#myModal0']").click()
        cy.xpath("(//a[@href='#'][contains(.,'Close')])[1]").click()

    })

})//Cierre de describe