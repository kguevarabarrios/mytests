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

describe("Eventos del mouse", () =>{

    it("Drag and drop", () =>{
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title().should('eq','The Internet')
        cy.xpath("//div[contains(@id,'column-a')]").drag("#column-b",{force:true})
    })

    //Igualmente en el siguiente ejemplo podemos usar {force:true} en caso de error
    it("Drag and drop 2", () =>{
        cy.visit("https://demo.anhtester.com/drag-and-drop-demo.html")
        cy.title().should('eq','Selenium Easy Demo - Drag and Drop Demo')
        cy.xpath("//span[@draggable='true'][contains(.,'Draggable 1')]").drag("#mydropzone")
        cy.xpath("//span[@draggable='true'][contains(.,'Draggable 2')]").drag("#mydropzone")
    })
//En el siguiente ejemplo no hemos podido poner en práctica cuando abre otra ventana
//debido a que la página ya es distinta, y era necesario recurrir al invoke para remover una parte del código
//El "mouseover" no me muestra el resultado esperado. Probar con otra página!
    it("Mouse events", () =>{
        cy.visit("https://www.way2automation.com/")
        cy.title().should('eq','Get Online Selenium Certification Course | Way2Automation')
        cy.wait(3000)
        cy.xpath("(//div[contains(@class,'elementor-background-overlay')])[1]").click({force:true})
        cy.wait(10000)
        cy.xpath("//i[contains(@class,'eicon-close')]").click({force:true})
        cy.get('#menu-item-27580 > :nth-child(1) > .menu-text').trigger('mouseover')
        cy.get('#menu-item-27597 > [href="https://www.selenium-tutorial.com/courses/"] > .menu-text').trigger('mouseover')
        cy.xpath("(//span[@class='menu-text'][contains(.,'Lifetime Membership')])[1]").click({force:true})
    })

    it.only("Drag and Drop Sliders", () =>{
        cy.visit("https://demo.anhtester.com/drag-drop-range-sliders-demo.html")
        cy.title().should('eq','Selenium Easy - Drag and Drop Range Sliders')
        cy.get('#slider1 > .range > input').invoke("attr","value","90")
        cy.get('#slider3 > .range > input').invoke("attr","value","60")
        cy.get('#slider5 > .range > input').invoke("attr","value","90")

    })

})//Cierre de describe