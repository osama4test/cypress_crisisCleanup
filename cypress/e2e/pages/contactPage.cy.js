
class contactPage {

    //All the css selectors 

    elements = {

        contactPageBtn: () => cy.get(':nth-child(7) > .font-h1')



    }


    verifyContactPage(){
       
        this.elements.contactPageBtn().invoke('removeAttr','target').click()
        cy.wait(4000)
        
       
        
     
    }




}
    export default contactPage