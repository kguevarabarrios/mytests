import pageobjdemo from '../../support/pageObj/demo/pageobj_demo'
/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Page Object Model', () =>{

    const prueba=new pageobjdemo()

    prueba.visitHome()

    it('Probando Demo1', () =>{
        prueba.demo1("Kilian","Guevara","kilian@gmail.com")
    })

    it.only('Probando Demo2', () =>{
        prueba.demo2("3201557755","Bien lejos","Barcelona")

        // Este código no funciona correctamente, el profesor no llegó a profundizar:

        // if (cy.xpath("//small[contains(@data-bv-validator,'phone')]").should("be.visible")){
        //     cy.log("El teléfono es inválido")
        // }else if(cy.xpath("//small[@class='help-block'][contains(.,'Please supply your phone number')]").should("be.visible")){
        //     cy.log("Inserta un número de teléfono")
        // }else{
        //     cy.log("El número de teléfono es válido")
        // }                             
    })

})//Cierre de describe