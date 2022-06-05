/// <reference types='cypress' />
require('cypress-plugin-tab')
require('cypress-xpath')
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

describe('Demo de Api Rest 2', () =>{

    it('Demo 2', () =>{

        const datos={
            "Nombre": "Kilian",
            "Apellido": "Guevara",
            "Tel": "7864923",
            "Dir": "Barcelona",
            "Cursos":[
                {
                    "Nombre": "AWS",
                    "Descripcion": "Amazon Cloud Engineer"
                },
                {
                    "Nombre": "Azure",
                    "Descripcion": "Microsoft Cloud Engineer"
                },
                {
                    "Nombre": "Google",
                    "Descripcion": "Google Cloud Engineer"
                },
            ]
        }

        cy.log(datos.Nombre)
        cy.log(datos.Apellido)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[0])
        cy.log(datos.Cursos[0].Nombre)
        cy.log(datos.Cursos[0].Descripcion)

    })

})//Cierre de describe