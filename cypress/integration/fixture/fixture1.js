/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Carga por fixture', () =>{

//FORMA 1 DE HACERLO:
    // before(function(){
    //     cy.fixture("demo").then(function(data){
    //         globalThis.data=data
    //     })
    // })

//FORMA 2 DE HACERLO CON ALIAS, HACIENDO NECESARIO COLOCAR UNA LINEA DE PROMESA:
    // before(function(){
    //     cy.fixture("demo").as("data_json")
    // })

    it('Test 1 cargando por json', () =>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')

        // cy.get("@data_json").then((data)=>{
            cy.get('#userName').should("be.visible").type(data.name)
            cy.get('#userEmail').should("be.visible").type(data.email)
            cy.get('#currentAddress').should("be.visible").type(data.address)
        // })
    })
//FORMA 3 DE HACERLO CUANDO HAY QUE REPETIR VARIAS VECES CON DATOS DIFERENTES DEL JSON:
//IMPORTANTE: TODO DEBE ESTAR DENTRO DEL CICLO FOREACH
//TIP1: LOS DATOS JSON PUEDEN SER GENERADOS EN MILES DE LINEAS A TRAVES DE MOCKAROO.COM
//TIP2: LOS DATOS EXCEL PUEDEN CONVERTIRSE A JSON A TRAVES DE https://beautifytools.com/
    it.only('Test 2 cargando por json', () =>{

        cy.fixture("demo2").then(testdata =>{
            testdata.forEach(data =>{
                const name=data.name
                const email=data.email
                const address=data.address

                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq','ToolsQA')

                cy.get('#userName').should("be.visible").type(data.name)
                cy.get('#userEmail').should("be.visible").type(data.email)
                cy.get('#currentAddress').should("be.visible").type(data.address)

            })    
        })
  
    })

})//Cierre de describe