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

    after(()=>{

        alert("Demo de Test realizado por Kilian Guevara")

    })

    it('Jumbo Login', () =>{
        
        cy.get('#menu-item-my-account-options > .vtex-menu-2-x-styledLinkContent').click({force:true}) 
        // cy.wait(10000)
        // cy.get('#btnNoIdWpnPush').click({force:true})
        cy.wait(25000)
        cy.get('#btnNoIdWpnPush').click({force:true})
        cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type("javiergb85@gmail.com")
        cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type("Jav123456789..{enter}")
        cy.wait(5000)
 
    })

    // it('Cambiando Dirección de Envío', () =>{

    //     cy.xpath("//span[@class='tiendasjumboqaio-delivery-modal-3-x-containerTriggerButton'][contains(.,'CAMBIAR')]").click({force:true})
        // cy.get(':nth-child(3) > .w-100 > .mb5 > .flex-column > .css-1pcexqc-container > .pa0 > .css-1j9dihh-control > .css-yiuvdt').click({force:true})
        // cy.xpath("//div[@class='flex'][contains(.,'BOGOTÁ, D.C.')]").type("BOGOTÁ, D.C.")
        // cy.xpath("//div[@class='css-yiuvdt'][contains(.,'Ciudad')]").click({force:true})
        // cy.xpath("//div[@class='flex'][contains(.,'Bogotá, D.C.')]").type("Bogotá, D.C.")
        // cy.xpath("//input[contains(@id,'autocomplete')]").type("Calle 13bis #80d 39")
        // cy.xpath("//div[@class='vtex-button__label flex items-center justify-center h-100 ph6 w-100 border-box '][contains(.,'Confirmar')]").click({force:true})
        
    // })

    it('Añadiendo Item al Shopping Cart', () =>{

        // cy.wait(15000)
        // cy.get('#btnNoIdWpnPush').click({force:true})
        cy.xpath("//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--header-menu-item flex justify-between nowrap'][contains(.,'CATEGORIAS')]").trigger("mouseover")
        cy.wait(2000)
        cy.xpath("(//a[@href='/electrodomesticos'][contains(.,'Electrodomésticos')])[1]").trigger("mouseover")
        cy.xpath("//a[@href='/electrodomesticos/climatización/aires-acondicionados?order=OrderByBestDiscountDESC'][contains(.,'Aires Acondicionados')]").click({force:true})
        cy.wait(30000)
        cy.get(':nth-child(1) > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > .vtex-flex-layout-0-x-flexCol--ppal-shelf > :nth-child(10) > .vtex-flex-layout-0-x-flexRow--btn-shelf > .vtex-flex-layout-0-x-flexRowContent--btn-shelf > [style="width: 100%;"] > .vtex-flex-layout-0-x-flexRow > .mt0 > :nth-child(2) > .vtex-flex-layout-0-x-flexRow--container-custom-btn-add > .vtex-flex-layout-0-x-flexCol > .vtex-button > .vtex-button__label > .tiendasjumboqaio-delivery-modal-3-x-buttonDataContainer').click({force:true})
        cy.get('.vtex-flex-layout-0-x-flexRow--menu-categories > .vtex-store-components-3-x-container > .mt0 > :nth-child(3) > .vtex-flex-layout-0-x-flexCol').click({force:true})
        cy.wait(2000)
        cy.xpath("//span[@class='vtex-minicart-2-x-minicartQuantityBadge vtex-minicart-2-x-minicartQuantityBadge--minicart-desktop vtex-minicart-2-x-minicartQuantityBadgeDefault c-on-emphasis absolute t-mini bg-emphasis br4 w1 h1 pa1 flex justify-center items-center lh-solid'][contains(.,'0')]").click({force:true})
        cy.wait(2000)
        cy.get('.tiendasjumboqaio-jumbo-minicart-2-x-iconall').click({force:true})
    })

    it('Eliminado Item del Shopping Cart', () =>{

        cy.wait(3000)
        cy.get('.b--muted-3 > .mr3 > .absolute').click({force:true})
        cy.wait(1000)
        cy.get('.vtex-minicart-2-x-closeIcon').click({force:true})
    
    })

    it('Haciendo Logout', () =>{

        cy.wait(2000)
        cy.get('#menu-item-my-account-options > .vtex-menu-2-x-styledLinkContent').click({force:true}) 
        cy.wait(5000)
        cy.get('.vtex-my-account-1-x-menuLink').click({force:true})
        cy.wait(1000)
        cy.get('.bg-action-primary > .vtex-button__label').click({force:true})

    })

})//Cierre de describe