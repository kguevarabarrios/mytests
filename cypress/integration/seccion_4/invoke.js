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

describe("Invoke", () =>{

    it("Invoke texto", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")

        cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
        cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")
        
        cy.get('[for="firstname"]').invoke("text").as("firstname")
        cy.get("@firstname").should("contain","First name:").then(()=>{
            cy.get('#firstname').type("Kilian")
        })
    })

    it("Invoke estilos", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")

        cy.get('[for="firstname"]').invoke("attr","style","color:red; font-size:50px").invoke("text","prueba")
        
    })

    it("Invoke ocultar y mostrar", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")
        cy.wait(1000)
        cy.get('[for="firstname"]').invoke("hide","2s") // Se puede hacer solo sin el tiempo
        cy.wait(1000)
        cy.get('[for="firstname"]').invoke("show","3s") // Se puede hacer solo sin el tiempo
    })

    it("Reto Invoke", () =>{
        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.title().should("eq","Input Validation")
        cy.get('[for="surname"]').invoke("hide")
        cy.get('#surname').invoke("hide")
        cy.wait(2000)
        cy.get('#firstname').type("Kilian").then(()=>{
            cy.wait(2000)
            cy.get('[for="surname"]').invoke("show")
            cy.get('#surname').invoke("show")
            cy.get('#surname').type("Guevara")
        })
        
    })

    it("Invoke SRC", () =>{
        cy.visit("https://demo.anhtester.com/bootstrap-modal-demo.html")
        cy.title().should("eq","Selenium Easy Demo - Bootstrap Modal Demo to Automate")
        //Función para validar si hay una imagen en la página
        cy.get('.cbt').invoke("attr","src").should("include","anhtester_logo_512.png")
    })

    it.only("Invoke Target Blank", () =>{
        cy.visit("https://dvwa.co.uk/")
        cy.title().should("eq","DVWA - Damn Vulnerable Web Application")
        //En este ejemplo inicialmente se tomó lo indicado en el programa de Cypress pero hacía
        //referencia a una línea donde no estaba el target, por lo que en el DOM se buscó
        //la línea que si incluía el target (en este caso la línea previa) y se copió su Xpath
        //Permitiendo que se ejecutara el comando Invoke con éxito
        cy.xpath("//*[@id='pagewidth']/div/div[5]/a[2]").invoke("removeAttr","target").click({force:true})
    })

})//Cierre de describe