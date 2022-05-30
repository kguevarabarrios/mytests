/// <reference types="cypress" />
require('cypress-plugin-tab') //Activador de plugin "tab"
require('cypress-xpath') //Activador de plugin para selector "xpath"
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Asserts", () =>{

    //Con esta sección de Asserts lo que se busca es encontrar "asserts" de forma más precisa
    //y más global desde mi punto de vista, se usan en situaciones complejas.
    // A continuación ejemplos:
    it("Asserts Contains", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.get("#block_top_menu").contains("Women").click()
    })
    //A continuación un Asserts que mata la partida con la función "eq(# de arreglo)"
    //Donde 0 es 1, 1 es 2, y 2 es 3, etc, sin embargo hay que ir subiendo de niveles hasta
    //ir separando y segmentando para llegar al eq correcto.
    it("Asserts con Eq", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.get(".product-image-container").find(".product_img_link").eq(0).click()
    })
    //Ejemplo donde vamos a aplicar los Asserts validando simplemente textos
    //A partir de este ejemplo entramos un poco más de lleno a nivel profesional
    //Y programando javascript
    it("Asserts validando texto", () =>{
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.get(".product-image-container").find(".product_img_link").eq(0).click()
        cy.get("#product_condition .editable").then((t)=>{
            let texto=t.text()
            if(texto=="New")
            cy.log("Item nuevo")
        })
    })
})//Cierre de describe

//Probando con otra técnica de mi propia cosecha con lo aprendido
//Funciona da el mismo resultado anterior con menos líneas de código

it("Asserts validando texto", () =>{
    cy.visit("http://automationpractice.com/index.php")
    cy.title().should('eq','My Store')
    cy.get(".product-image-container").find(".product_img_link").eq(3).click()
    cy.get("#product_condition .editable").contains("New").then(()=>{
        cy.log("Item nuevo")
        cy.get("#our_price_display").then((p)=>{
            let precio=p.text()
            precio=precio.slice(1)
            if (precio > 20){
                cy.log("No puede comprarse el Item")
                cy.xpath("(//a[@href='http://automationpractice.com/index.php?id_category=3&controller=category'][contains(.,'Women')])[2]").click()
                
            }else{
                cy.log("Puede comprarse el Item")
                cy.xpath("//span[contains(.,'Add to cart')]").click()

            }

        })
    })
})

it("Asserts validando texto con have y contains", () =>{
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','ToolsQA')
    cy.get('#userName').type("Kilian")
    cy.get('#userEmail').type("kilian@gmail.com")
    cy.get('#submit').should("be.visible").click()
    cy.get('#name').should("have.text","Name:Kilian").then(()=>{
        cy.log("Ok bien con have.text pero no mejor solo el nombre")
    })
    cy.get('#name').should("contain.text","Kilian").then(()=>{
        cy.log("20 puntos con containt.text sigue así!")
    })
    cy.log("Y si lo probamos de otra forma usando slice?")
    cy.get('#name').then((n)=>{
        let nombre=n.text()
        nombre=nombre.slice(5)
        cy.log(nombre).then(()=>{
            cy.log("Nojoda pipe pelao!")
        })
    })
})

it("Asserts validación contain.value y have.vualue", () =>{
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','ToolsQA')
    cy.get('#userName').type("Kilian")
    cy.get('#userName').should("have.value","Kilian").then(()=>{
        cy.get('#userEmail').type("kilian@gmail.com")
    })
    cy.get('#userName').should("contain.value","Kilian").then(()=>{
        cy.get('#currentAddress').type("Vive en Barcelona, Anzoátegui y es un pipe pelao!")
})})

it("Asserts validación have.class", () =>{
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','ToolsQA')
    cy.get('#userName').should("be.visible").should("have.class","form-control").then(()=>{
        cy.log("El campo Name es válido")
    })
})

//El próximo ejemplo es lo mismo que el anterior, solo que en lugar de repetir el "should"
//se coloca "and". Observése:
it("Asserts validación have.class y función AND", () =>{
    cy.visit("https://demoqa.com/text-box")
    cy.title().should('eq','ToolsQA')
    cy.get('#userName').should("be.visible").and("have.class","form-control").then(()=>{
        cy.log("El campo Name es válido")
    })
})
//Assert para medir longitud de un objeto y que contenga CSS, como por ejemplo: una tabla
it("Asserts lenght", () =>{
    cy.visit("https://demo.anhtester.com/table-pagination-demo.html")
    cy.title().should('eq','Selenium Easy - Table with Pagination Demo')
    cy.get("#myTable >tr >td").should("have.length",91).and("have.css","padding","8px")
    })

//Eliminando ventana de inicio (pero nunca apareció en la prueba)
it("Asserts click en modal", () =>{
    cy.visit("https://www.farmatodo.com.ve/")
    cy.title().should('eq','Farmatodo')
    cy.xpath("//div[contains(@id,'myModal')]").click({force:true})
})
    
it.only("Reto Asserts", () =>{
    cy.visit("https://demo.anhtester.com/basic-first-form-demo.html")
    cy.title().should('eq','Selenium Easy Demo - Simple Form to Automate using Selenium')
    let a=3
    let b=3
    cy.get("#sum1").should("be.visible").and("have.class","form-control").type(a)
    cy.get("#sum2").should("be.visible").and("have.class","form-control").type(b)
    cy.contains("[type='button']","Get Total").click()
    cy.get('#displayvalue').should("be.visible").then((e)=>{
        cy.log("El resultado extraido es: "+e.text())
        let r=a+b //Aquí se modifica para que de un resultado distinto
        let res=e.text()
        if(r==res){
            //El invoke, invoca código html para modificarlo y en este caso resaltar un atributo
            //modificando su color
            cy.log("El resultado es el mismo")
            cy.get('#displayvalue').should("be.visible").then((e)=>{
                cy.get('#displayvalue').invoke("attr","style","color:blue")
            })
                }else{
            cy.log("El resultado es distinto")
            cy.get('#displayvalue').should("be.visible").then((e)=>{
                cy.get('#displayvalue').invoke("attr","style","color:red")
            })
        }
    if(res > 5){
        a=a+2
        b=b+2
        cy.get("#sum1").should("be.visible").and("have.class","form-control").clear().type(a)
        cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)
        cy.contains("[type='button']","Get Total").click()
    }else{
        a=a-1
        b=b-1
        cy.get("#sum1").should("be.visible").and("have.class","form-control").clear().type(a)
        cy.get("#sum2").should("be.visible").and("have.class","form-control").clear().type(b)
        cy.contains("[type='button']","Get Total").click()
    }
    })
    })