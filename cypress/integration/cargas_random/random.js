/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Método de Carga por Randoms', () =>{

    let numero_pruebas=10

    it('Test Random', () =>{
        for(let num=1;num<=numero_pruebas;num++)
            {
                let estado_Arr = ["1: 1", "3: 13", "5: 32"];
                let Random_estado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];
                let cantidad=Math.floor(Math.random() * 3000);

                cy.visit('https://demoqa.com/text-box')
                cy.title().should('eq','ToolsQA')
                cy.xpath("//input[contains(@id,'userName')]").should("be.visible").type("Name"+cantidad)
                cy.xpath("//input[contains(@id,'userEmail')]").should("be.visible").type("Email"+cantidad+"@gmail.com")
            }
    })

})//Cierre de describe