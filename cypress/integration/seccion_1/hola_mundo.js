describe("Curso de Cypress seccion 1", () =>{

it('Primer Test: Hola Mundo en Cypress', () => {
    cy.log("Hola mundo")
   
});

it('Segundo Test: Introducir nombre', () => {
    cy.visit("https://demoqa.com/text-box")
    
    cy.get("#userName").type("Kilian")

    
});

})//Cierre de describe