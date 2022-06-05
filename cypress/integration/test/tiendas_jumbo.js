/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Tiendas Jumbo', () =>{

    before(()=>{
        cy.visit('https://www.tiendasjumbo.co/')
        cy.title().should('eq','Supermercados y Tiendas Jumbo')

    })

    it('Jumbo Login', () =>{
        cy.get('#menu-item-my-account-options > .vtex-menu-2-x-styledLinkContent').click({force:true}) 
        cy.wait(10000)
        cy.get('#btnNoIdWpnPush').click({force:true})
        cy.wait(15000)
        cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type("javiergb85@gmail.com")
        cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type("Jav123456789..{enter}")
        cy.wait(20000)
        // Logout de la cuenta:
        // cy.get('.vtex-my-account-1-x-menuLink').click({force:true})
        // cy.wait(2000)
        // cy.get('.bg-action-primary > .vtex-button__label').click({force:true})
        cy.xpath("//span[contains(.,'CAMBIAR')]").click({force:true})
        cy.wait(2000)
        cy.xpath("//div[@class='vtex-button__label flex items-center justify-center h-100 ph6 '][contains(.,'Agregar otra dirección')]").click({force:true})
        cy.wait(3000)
        cy.get(':nth-child(3) > .w-100 > .mb5 > .flex-column > .css-1pcexqc-container > .pa0 > .css-1j9dihh-control > .css-yiuvdt').click({force:true})
        cy.xpath("//div[@class='flex'][contains(.,'BOGOTÁ, D.C.')]").click({force:true})
        cy.get(':nth-child(4) > .w-100 > .mb5 > .flex-column > .css-1pcexqc-container > .pa0 > .css-1j9dihh-control > .css-yiuvdt').click({force:true})
        cy.xpath("//div[@class='flex'][contains(.,'Bogotá, D.C.')]").click({force:true})
        cy.xpath("//input[contains(@id,'autocomplete')]").type("Dirección de Prueba")
        cy.xpath("//div[@class='vtex-button__label flex items-center justify-center h-100 ph6 w-100 border-box '][contains(.,'Confirmar')]").click({force:true})

        
    })

})//Cierre de describe