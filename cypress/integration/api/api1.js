/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Demo de Api Rest 1', () =>{

    it('Demo 1', () =>{

        const datos={
            "Nombre": "Kilian",
            "Apellido": "Guevara",
            "Tel": "7864923",
            "Dir": "Barcelona",
        }

        cy.log(datos["Nombre"])
        cy.log(datos["Apellido"])
        cy.log(datos["Tel"])
        cy.log(datos["Dir"])

    })

})//Cierre de describe