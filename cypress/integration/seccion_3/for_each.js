/// <reference types="cypress" />
require('cypress-plugin-tab') //Activador de plugin "tab"
require('cypress-xpath') //Activador de plugin para selector "xpath"
import 'cypress-file-upload'; //Activador de plugin para "upload-files"
require('@4tw/cypress-drag-drop') //Activador de plugin para "drag-and-drop"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Bucles For y Each", () =>{


    it("For 1", () =>{
        for(let i=1; i<=1000; i++){
        cy.log("Número: "+i) 
        }
        
    })

    it("Tabla de Multiplicar del 5", () =>{
        for(let i=1; i<=10; i++){
        let multi=5
            cy.log(multi + " x " + i + " = "+ multi*i) 
        }
        
    })
//Ejemplo con Each para validar el nombre de cada elemento en la página
    it("Each 1", () =>{
       cy.visit("http://automationpractice.com/index.php")
       cy.title().should("eq","My Store")
       cy.get(".product-name").each(($el,index,$list)=>{
            //cy.log(index)
            //cy.log($list)
            //cy.log($el.text())
            let vestido=$el.text()
            cy.log(vestido)

            //Clickeando un elemento específico:
            if(vestido.includes("Blouse")){
                cy.wrap($el).click({force:true})
            }

        
       })
    })

//Reto usando ciclo For o Each para agregar 4 elementos al carrito de compra
//Nótese que la clase ".product-name" está dentro del "For"
//Cuando no haga click en un elemento, así lo hayas probado por separado bien
//Se debe ser más específico, por ejemplo buscando el elemento padre
it("Reto 1", () =>{
    cy.visit("http://automationpractice.com/index.php")
    cy.title().should("eq","My Store")
         
        for(let i=0; i<=3; i++){
                cy.get("#center_column .product-name").eq(i).click({force:true})
                cy.get('#quantity_wanted').should("be.visible").clear().type("4")
                cy.get('#group_1').select("M")
                cy.wait(2000)
                cy.get('.exclusive > span').should("be.visible").click()
                cy.wait(2000)
                cy.get('.button-medium > span').should("be.visible").click()
                cy.wait(2000)
                cy.get('.home').click()

        }
        //Probando con éxito el "mouseover"
        cy.get('[title="View my shopping cart"]').trigger("mouseover")
        cy.xpath("//span[contains(.,'Check out')]").click({force:true})

    })
})                

//Basado en lo mismo que el ejercicio anterior pero el número total de elementos es definido
//según lo que hay en la página
//REVISAR CÓDIGO NO CORRE COMPLETO PERO TAMPOCO DA ERROR, DE REPENTE SE PUEDE HACER
//DE OTRA FORMA O CREAR UN NUEVO ARCHIVO CON ESTE ULTIMO EJERCICIO
// it.only("Reto 2", () =>{
//     cy.visit("http://automationpractice.com/index.php")
//     cy.title().should("eq","My Store")
//     let t=500
//     const datos=[];

//     cy.get("#center_column .product-name").each(($el,index,$list))=>{
//         datos[index]=$el.text()
//     }).then(()=>{

//         for(let i=0; i<=datos.lenght; i++){
//             cy.get("#center_column .product-name").eq(i).click({force:true})
//             cy.get('#quantity_wanted').should("be.visible").clear().type("4")
//             cy.get('#group_1').select("M")
//             cy.wait(t)
//             cy.get('.exclusive > span').should("be.visible").click()
//             cy.wait(t)
//             cy.get('.button-medium > span').should("be.visible").click()
//             cy.wait(t)
//             cy.get('.home').click()

//         }
//     })


         
       
        //Probando con éxito el "mouseover"
        // cy.get('[title="View my shopping cart"]').trigger("mouseover")
        // cy.xpath("//span[contains(.,'Check out')]").click({force:true})


           
            


//Cierre de describe