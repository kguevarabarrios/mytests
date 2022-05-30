/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Reto Hooks', () =>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
        cy.xpath("//span[@class='form-hint'][contains(.,'Username')]").should("be.visible").type("Admin")
        cy.get('#txtPassword').should("be.visible").type("admin123")
        cy.xpath("//input[contains(@id,'btnLogin')]").should("be.visible").click({force:true})
    })

    afterEach(()=>{
        cy.get('#welcome').should("be.visible").click({force:true})
        cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').trigger("mouseover").click()
    })

    it('OrangeHRM 1', () =>{
        cy.get(':nth-child(1) > .quickLaunge > a > img').should("be.visible").click({force:true})
        cy.wait(1000)
    })

    it('OrangeHRM 2', () =>{
        cy.get('#menu_admin_viewAdminModule > b').click({force:true})
        cy.wait(1000)
    })

})//Cierre de describe