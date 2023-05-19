
class loginPage {

    //All the css selectors 

    elements = {

        emailText: () => cy.get('[data-cy="loginForm.email"] > [data-cy]'),
        passText:  () => cy.get('[data-cy="loginForm.password"] > [data-cy]'),
        loginBtn:  () => cy.get('[data-cy="loginForm.login"]'),
        scorecardText:  () => cy.get(':nth-child(1) > .h-full > .flex > .flex-1 > .uppercase')



    }

login(email, password, textSaveLogin){

    this.elements.emailText().type(email)
    this.elements.passText().type(password)
    this.elements.loginBtn().click()
    cy.wait(6000)
    
cy.get('.leading-snug > .relative > .w-full').click()
cy.get('#multiselect-options').find('.multiselect-option').eq(0).contains('Virginia Beach Tornado, May 2023').click()


      this.elements.scorecardText().should('have.text',`${textSaveLogin} (Virginia Beach Tornado, May 2023) `)
      cy.wait(2000)
      cy.get('.leading-snug > .relative > .w-full').click()
      cy.get('#multiselect-options').find('.multiselect-option').eq(1).contains('Pottawatomie & McClain Counties, OK Tornadoes').click()
      this.elements.scorecardText().should('have.text',`${textSaveLogin} (Pottawatomie & McClain Counties, OK Tornadoes) `)

      cy.get('[data-cy="js-invite-teammates"]').click()
      
      function generateNewUsername() {
        let text = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        
        for (let i = 0; i < 10; i++)
        text += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        return text;
        
        }
        const generatedUsername = generateNewUsername()
        cy.get('.email').type(generatedUsername + '@example.com')
        cy.get('[data-cy="js-send-invites"]').click().wait(7000)



     

      




}


}
export default loginPage