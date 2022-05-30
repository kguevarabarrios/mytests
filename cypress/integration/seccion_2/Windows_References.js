/// <reference types="cypress" />
require('cypress-plugin-tab') //Activador de plugin "tab"
require('cypress-xpath') //Activador de plugin para selector "xpath"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Referencias de Windows", () =>{

    it("Windows Propiedad Charset", () =>{
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq","The Number Game")
        cy.document().should("have.property","charset").and("eq","UTF-8")
        //UTF-8 Significa que puede escribirse en español en la página, acentando acentos, ñ, etc
        //Por tanto es una validación importante
    })

    it("Windows URL", () =>{
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should("eq","The Number Game").then(()=>{
            cy.log("Primera validación del sitio correcta")
        })
        cy.url().should("include","random-number.html")
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html").then(()=>{
            cy.log("Segunda validación del sitio correcta")
        })
    })

})//Cierre de describe