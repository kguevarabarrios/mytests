// Para que funcionen los comandos de Cypress se debe colocar la función abajo:
/// <reference types="cypress" />
require('cypress-plugin-tab')
require('cypress-xpath') //Activador de plugin para selector "xpath"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Tipos de Selectores", () =>{

    it("Selector por ID", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get('#userName').should("be.visible").type("Kilian")
    })

    it("Selector por Atributo", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.get("[placeholder='Full Name']").should("be.visible").type("Kilian Guevara")
    })

    //El siguiente selector necesita de un plugin pero es muy útil cuando se complica todo
    //por cuanto viene a ser un selector muy práctico para escoger un determinado campo
    //a través de la inspección en el navegador, dando Copy Xpath ó Copy Full Xpath
    // *También hay extensiones de Chrome que ayudan con la identificación de Xpath*
    // Chropath, Truepath, Relative Xpath (la más poderosa sin abrir inspección)
    it("Selector por Xpath", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.xpath("//*[@id='userName']").should("be.visible").type("Kilian Guevara")
        cy.xpath("/html/body/div[2]/div/div/div[2]/div[2]/div[2]/form/div[2]/div[2]/input").should("be.visible").type("kilian@gmail.com")
        cy.xpath("//textarea[contains(@id,'currentAddress')]").should("be.visible").type("Barcelona")
    })

    //El siguiente selector es para seleccionar opciones pero estas se basan en class
    //que pueden repetirse mucho en el código pero identificamos a partir de su contenido
    //con .contains como se puede observar en el ejemplo
    it("Selector por Contains", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')

        cy.get(".custom-control-label").contains("Female").click()
        cy.get(".custom-control-label").contains("Male").click()
        cy.get(".custom-control-label").contains("Female").click()
        cy.get(".custom-control-label").contains("Male").click()

    })

    it.only("Selector por Copy Selector", () =>{
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')

        cy.get("#subjectsContainer > div > div.subjects-auto-complete__value-container.subjects-auto-complete__value-container--is-multi.css-1hwfws3").should("be.visible").type("Prueba")

    })

})//Cierre de describe