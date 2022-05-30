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

describe("Fechas", () =>{

    //IMPORTANTE: Si por alguna razón no toma las fechas, es imprescindible validar el formato
    //formato de la fecha
    it("Fechas", () =>{
        cy.visit("https://demo.anhtester.com/bootstrap-date-picker-demo.html")
        cy.title().should('eq','Selenium Easy - Best Demo website for Bootstrap Date picker')
        cy.get('#sandbox-container1 > .input-group > .form-control').should("be.visible").type("05/08/1983").then(()=>{
            cy.get('#sandbox-container1 > .input-group > .form-control').type("{enter}")
            cy.wait(1000)
            cy.get('.input-group-addon > .glyphicon').click({force:true})
            cy.wait(1000)
            cy.get('.datepicker-days > .table-condensed > tfoot > :nth-child(1) > .today').click({force:true})
            cy.get('[placeholder="Start date"]').type("01/01/2022 {esc}")
            cy.get('[placeholder="End date"]').type("31/12/2022 {esc}")
        })
    })

})//Cierre de describe