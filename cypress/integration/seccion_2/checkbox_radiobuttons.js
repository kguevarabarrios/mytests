/// <reference types="cypress" />
require('cypress-plugin-tab') //Activador de plugin "tab"
require('cypress-xpath') //Activador de plugin para selector "xpath"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Checkbox", () =>{

    it("Checkbox por click", () =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
        cy.get('#wsf-1-label-36-row-1').click()
        cy.wait(1000)
        cy.get('#wsf-1-label-36-row-1').click()
    })

    //En el siguiente ejemplo no me funcionaba, por lo que con la ayuda de Cypress
    //me indicó que podía forzarlo, y así funcionó. Notése: ({force: true})
    it("Checkbox por selección global", () =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
        cy.get("[type='checkbox']").check({force: true}).should("be.checked")
        cy.wait(1000)
        cy.get("[type='checkbox']").uncheck({force: true}).should("not.be.checked")
    })

    //Lo siguiente no funcionó como lo explicó el profesor
    it("Checkbox por selección sin click", () =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
        //cy.get('#wsf-1-label-36-row-1').check(['PHP']).should("be.checked")
        //cy.get('#wsf-1-label-36-row-1').uncheck({force: true})
    })

    it.only("Selección con Radio Buttons", () =>{
        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        cy.title().should('eq','Radio Buttons | TestingQaRvn')
        cy.get('#wsf-1-label-44-row-1').click()
        cy.get('#wsf-1-label-44-row-2').click()
    })



})//Cierre de describe