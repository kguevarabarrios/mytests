const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");
require('cypress-xpath')

Given('Abrir el navegador'),()=>{
    cy.visit("https://demoqa.com/text-box")
}

// When('Cargando el nombre'),()=>{
//     cy.xpath("//input[contains(@id,'userName')]").should("be.visible").type("Kilian")
// }

// When('Cargando el email'),()=>{
//     cy.xpath("//input[contains(@id,'userEmail')]").should("be.visible").type("kilian@gmail.com")
// }

// And('Cargando la dirección'),()=>{
//     cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Bacelona")
// }

// Then('Validar el nombre de la página'),()=>{
//     cy.title().should("eq","ToolsQA")
// }