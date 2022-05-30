/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Campos personalizados', () =>{

    before(()=>{
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','ToolsQA')

    })

    it('Demo 1', () =>{
        //En la ruta support/commands.js está el archivo para personalizar comandos
        //Tiene la misma idea de los snippets pero escondiendo el código
    })

})//Cierre de describe