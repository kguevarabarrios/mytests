/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Página con Información sobre los Hooks', () =>{

    it('Hooks 1', () =>{
        cy.visit('https://www.bigbinary.com/learn-qa-automation-using-cypress/hooks-in-cypress')
        cy.title().should('eq','Using hooks in Cypress | BigBinary')

        //Con esta página tenemos la sintaxis básica de los Hooks
        //Los Hooks nos ayudan a no repetir código entre pruebas
        //Básicamente definimos código en común y se repite entre las pruebas

    })

})//Cierre de describe