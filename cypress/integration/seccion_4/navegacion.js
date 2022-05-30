/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Navegación entre las páginas', () =>{

    it('Back, Forward. Reload', () =>{
        cy.visit('https://demoqa.com/')
        cy.title().should('eq','ToolsQA')
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg').should("be.visible").click({force:true})
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').should("be.visible").click({force:true})

        cy.go("back")
        cy.go("back")

        cy.go("forward")
        cy.go("forward")

        cy.get('#userName').should("be.visible").type("Kilian")

        cy.reload //Para recargar la página, parece que lo hizo pero no borra el contenido del campo "Nombre"

    })

})//Cierre de describe