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

  //Al profesor este ejercicio le funciona, no me da error pero no corre completo! Misterio!
  //De ninguna forma me corre completo!

describe("", () =>{

    it("Reto 2", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should("eq","My Store")
        let t=500
        const elementos=[];
        cy.get("#center_column .product-name").each(($el,index,$list)=>{
            elementos[index]=$el.text()
            //cy.log(elementos.length)
                        for(let i=0; i<=elementos.lenght; i++){
                cy.get("#center_column .product-name").eq(i).click({force:true})
                cy.get('#quantity_wanted').should("be.visible").clear().type("4")
                cy.get('#group_1').select("M")
                cy.wait(t)
                cy.get('.exclusive > span').should("be.visible").click()
                cy.wait(t)
                cy.get('.button-medium > span').should("be.visible").click()
                cy.wait(t)
                cy.get('.home').click()
            }
        
        })
        // .then(()=>{
    
        //     for(let i=0; i<=elementos.lenght; i++){
        //         cy.get("#center_column .product-name").eq(i).click({force:true})
        //         cy.get('#quantity_wanted').should("be.visible").clear().type("4")
        //         cy.get('#group_1').select("M")
        //         cy.wait(t)
        //         cy.get('.exclusive > span').should("be.visible").click()
        //         cy.wait(t)
        //         cy.get('.button-medium > span').should("be.visible").click()
        //         cy.wait(t)
        //         cy.get('.home').click()
        //     }
        // })
    })

})//Cierre de describe