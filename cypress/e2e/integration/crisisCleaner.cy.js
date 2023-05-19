// import contactPage from "../pages/contactPage.cy"
// import blogPage from "../pages/blogPage.cy"
// import dropdown from "../pages/dopdownPage.cy";

import loginPage from "../pages/loginPage.cy";

// const BlogPage = new blogPage()
// const ContactPage = new contactPage()
//  const Dropdown = new dropdown()
  
const LoginPage = new loginPage()
  


describe('Verify all the checks', () => {
  let value
  beforeEach(() => {
    cy.visit('/')

    sessionStorage.clear()
    cy.clearCookies()
    cy.clearLocalStorage()
    

    cy.fixture('loginCredentials')
            .then((data) => value = data)
  
  });

//Comment: 01 Page is not secured, cypress doesn't handles unsecured pages
  // it('Blog Page', () => {
    


//Blog Page
    // cy.wait(2000)
    // cy.xpath("//div//span//a[contains(text(),'Blog')]").invoke('removeAttr','target').click()
    //div//span//a[contains(text(),'Blog')]
    
  // }) 

//Contact Page
//Comment: 02 //API unable to fetch, captcha needs to get disabled on the server this website is deployed on from dev's end for testing purposes
// it('Blog Page', () => {
//     ContactPage.verifyContactPage()

//       Cypress.Commands.add("clickRecaptcha", () => {
//         cy.window().then(win => {
//           win.document
//             .querySelector("#cf-chl-widget-7j17s")
//             .contentDocument.getElementById("recaptcha-token")
//             .check();
//         });
//       });


// })

it('Verify Login ', () => {

  LoginPage.login(value.email, value.password, value.textSaveLogin)


})



})
      
