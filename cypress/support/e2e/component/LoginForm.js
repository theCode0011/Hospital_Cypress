
const message = require("../../../fixtures/message.json")

class LoginForm{

    constructor(){
        this.signInTitle = ".modal-title";
        this.usernameField="#username";
        this.passwordField="#password";
        this.signInBtn=".btn";
    }

    isFormOpened(){
        cy.get(this.signInTitle).then((text)=>{
            expect(text).to.have.text(message.SIGN_IN);
        })
        cy.get(this.usernameField).should("be.visible");
        cy.get(this.passwordField).should("be.visible");
        cy.get(this.signInBtn).should("be.visible");
    }

    login(username, password){
        cy.get(this.usernameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.signInBtn).click()
    }



}
export const loginForm = new LoginForm();