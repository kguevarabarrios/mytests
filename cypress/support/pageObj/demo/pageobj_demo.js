class pageobjdemo{
    visitHome(){
        before(()=>{
            cy.visit('https://demo.anhtester.com/input-form-demo.html')
            cy.title().should('eq','Selenium Easy - Input Form Demo with Validations')
        }) 
    }  
    
    demo1(name,last_name,email){
        cy.xpath("//input[contains(@name,'first_name')]").type(name)
        cy.xpath("//input[contains(@name,'last_name')]").type(last_name)
        cy.xpath("//input[contains(@name,'email')]").type(email)
        
        }

    demo2(phone,address,city){
        cy.xpath("//input[contains(@name,'phone')]").type(phone)
        cy.xpath("//input[contains(@name,'address')]").type(address)
        cy.xpath("//input[contains(@name,'city')]").type(city)
            
        }

}      

    
    

//Fin de la clase
export default pageobjdemo;