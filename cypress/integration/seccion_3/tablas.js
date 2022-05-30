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

describe("Tablas", () =>{

    it("Selección por Child", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        cy.log("Primera verificación")
        cy.get(".btn-group").children(".btn-success").contains("Green")
        cy.log("Segunda verificación")
        cy.get(".btn-group").children(".btn-success").should("contain","Green").click({force:true})
        cy.wait(tiempo)
        cy.log("Ahora se hace click en el resto con el método de 2da verificación")
        cy.get(".btn-group").children(".btn-warning").should("contain","Orange").click({force:true})
        cy.wait(tiempo)
        cy.get(".btn-group").children(".btn-danger").should("contain","Red").click({force:true})
    })

    it("Selección por EQ", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        cy.get("[type='button']").eq("2").should("contain","Orange").click({force:true})
        cy.get("[type='button']").eq("4").should("contain","All").click({force:true})
        //De otra forma sin EQ:
        cy.get("[type='button']").contains("Green").click({force:true})
    })

    it("Selección por Filter", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        cy.get("[type='button']").filter(".btn-warning").should("contain","Orange").click({force:true})
    })

    it("Selección por Find", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        cy.get(".btn-group").find(".btn-warning").should("contain","Orange").click({force:true})
    })

    it("Selección por First y Last", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        //First: Funciona combinado con Find y luego click en el primer elemento:
        cy.get(".btn-group").find("button").first().click({force:true})
        //Last: La misma función anterior pero usando el comando "Last":
        cy.get(".btn-group").find("button").last().click({force:true})
    })

    it("Selección de elementos siguientes con NextAll", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        //Validando
        cy.get("[type='button']").should("contain","Green")
        //Procediendo con NextAll
        cy.get("[type='button']").should("contain","Green").nextAll().should("have.length",4)
        //Haciendo una prueba de mi propia cosecha
        cy.get(".btn-group").children(".btn-success").nextAll().click({multiple:true})
    })

    it("Selección de elemento padre", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        //Nótese en el siguiente ejemplo que el assert de class no contiene "punto" .btn-group
        //Asumo que es porque ya se le está diciendo con "have.class" que es una clase
        cy.get("[type='button']").parent().should("have.class","btn-group")
    })

    it("Reto seleccionando All y cliqueando checkbox a todos los elementos", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        //Probando solo cliqueando a todos
        //cy.get(".btn-group").find("button").first().click({force:true}).nextAll().click({multiple:true})
        //Clickeando los checkbox de cada elemento
        cy.get(".btn-group").find("button").last().click({force:true})
        cy.get("[type='checkbox']").check({force:true}) //De forma global escoge todos los checkbox
        //cy.get(".ckbox").find("[type='checkbox']").last().click({force:true})
        // cy.get(".ckbox").children("#checkbox2").click({force:true})
        // cy.get(".ckbox").children("#checkbox3").click({force:true})
        // cy.get(".ckbox").children("#checkbox5").click({force:true})

    })

    it("Reto seleccionando All y cliqueando checkbox a todos los elementos con For y Asserts", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        
        for(let x=1;x<=4;x++){
            let nombreBoton="" //Cuando es una variable de texto, se inicializa en comillas
            if(x==1){
                nombreBoton="Green"
            }
            else if(x==2){
                nombreBoton="Orange"
            }
            else if(x==3){
                nombreBoton="Red"
            }
            else if(x==4){
                nombreBoton="All"
            }
            cy.get("[type='button']").eq(x).should("contain",nombreBoton).click({force:true})
            cy.wait(tiempo)
            cy.get("[type='checkbox']").check({force:true}) //De forma global escoge todos los che
            
        }
 
    })

    it("Reto seleccionando All y cliqueando checkbox a todos los elementos con For", () =>{
        cy.visit("https://demo.anhtester.com/table-records-filter-demo.html")
        cy.title().should("eq","Selenium Easy - Table Data Filter Demo")
        let tiempo=1000
        
        for(let x=1;x<=4;x++){
            cy.get("[type='button']").eq(x).click({force:true})
            cy.wait(tiempo)
            cy.get("[type='checkbox']").check({force:true}) //De forma global escoge todos los che
            
        }
 
    })

    it("Nuevo Reto para extraer datos de una tabla", () =>{
        cy.visit("https://demo.anhtester.com/table-sort-search-demo.html")
        cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")
        const datos=[];

        cy.get(".odd td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let x=0;x<=datos.length;x++){
                cy.log(datos[x])
            }

        })

        
    })

    it("Nuevo Reto para extraer datos de una tabla / Sumando valores campos númericos", () =>{
        cy.visit("https://demo.anhtester.com/table-sort-search-demo.html")
        cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")
        const datos=[];
        let numeros=0;

        cy.get("[role='row'] td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let x=0;x<=datos.length;x++){
                cy.log(datos[x])
                if(Number(datos[x])){ //Para extraer datos numéricos de la tabla
                    numeros+=Number(datos[x]) //Para sumar los datos numéricos extraidos
                }
            }
            cy.log("La suma total de los campos númericos: "+numeros)
            expect(numeros).eq(394)
        })

        //Haciendo click en la segunda página:
        cy.xpath("//a[contains(@data-dt-idx,'2')]").click({force:true})
        cy.wait(1000)

        cy.get("[role='row'] td").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>{
            for(let x=0;x<=datos.length;x++){
                cy.log(datos[x])
                if(Number(datos[x])){ //Para extraer datos numéricos de la tabla
                    numeros+=Number(datos[x]) //Para sumar los datos numéricos extraidos
                }
            }
            cy.log("La suma total de los campos númericos: "+numeros)
            expect(numeros).eq(824)
        })

        
    })

    it.only("Valor de un campo en específico", () =>{
        cy.visit("https://demo.anhtester.com/table-sort-search-demo.html")
        cy.title().should("eq","Selenium Easy - Tabel Sort and Search Demo")

        const campo=cy.get(':nth-child(2) > .sorting_1')
        campo.each(($el,index,$list)=>{
            const dato=$el.text()
            cy.log(dato)

                if(dato.includes("A. Ramos")){
                    campo.eq(index).next().next().next().then((age)=>{
                        const edad=age.text()
                        cy.log(edad)
                    })
                }
            })
   
      
    })

})//Cierre de describe