class blogPage {

    //All the css selectors 

    elements = {

        blogPageBtn: () => cy.get(':nth-child(3) > .font-h1')

    }

verifyBlogPage(){

    this.elements.blogPageBtn()
    .invoke("removeAttr", "target")
    .click()


}



}
    export default blogPage