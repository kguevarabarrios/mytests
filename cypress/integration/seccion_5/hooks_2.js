/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Hooks Ejemplos', () =>{

    before(()=>{   //Puede usarse "before" (ejecuta una vez) ó "beforeEach" (ejecuta en cada test)
        cy.visit('https://demo.anhtester.com/basic-checkbox-demo.html')
        cy.title().should('eq','Selenium Easy - Checkbox demo for automation using selenium')
    })

    it('Test 1', () =>{
        cy.xpath("//input[contains(@id,'isAgeSelected')]").check().should("be.checked")
    })

    it('Test 2', () =>{
        cy.xpath("//input[contains(@id,'isAgeSelected')]").uncheck().should("not.be.checked")
    })

    it('Test 3', () =>{
        cy.xpath("(//input[contains(@type,'checkbox')])[2]").check().should("be.checked")
    })

})//Cierre de describe