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

describe("Configuración y uso de los Snippets", () =>{

    it("Snippets 1", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should("eq","ToolsQA")
    
        //Configuración de abreviados en VS Code
        //Para el momento que escribo esta línea se configuró solo el template Cypress
    
    })

})//Cierre de describe