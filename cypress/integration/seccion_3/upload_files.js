/// <reference types="cypress" />
require('cypress-plugin-tab') //Activador de plugin "tab"
require('cypress-xpath') //Activador de plugin para selector "xpath"
import 'cypress-file-upload'; //Activador de plugin para upload-files
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Subiendo imagen", () =>{

    it("Uploading file", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        const imagen='img1.jpg'
        cy.xpath("//input[contains(@id,'uploadPicture')]").attachFile(imagen)
    })

})//Cierre de describe