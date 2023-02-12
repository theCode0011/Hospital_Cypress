const { homePage } = require("../HomePage")
const { loginForm } = require("../../component/LoginForm")

class Login{

    login(username, password){
        cy.visit("/")
        homePage.isPageOpened();
        homePage.getHeader().getSignBtn();
        loginForm.isFormOpened();
        loginForm.login(username, password)
    }
}
export const login = new Login();