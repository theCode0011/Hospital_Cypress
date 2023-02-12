import { header } from "../component/Header"
const message = require("../../../fixtures/message.json")

class HomePage{
    constructor(){
        this.headerPage = ".navbar";
        this.title = ".display-4";
        this.loggedPosition = "#home-logged-message";
        this.homeLoggedMsg="#home-logged-message";
    }

    getHeader(){
        return header;
    }

    isPageOpened(){
        cy.get(this.title).then((text)=>{
            expect(text).to.have.text(message.WELCOME_TITLE)
        })
    }

    isAutorizedCorrect(username){
        cy.get(this.homeLoggedMsg).then((text)=>{
            expect(text).to.have.text("You are logged in as user "+'"'+username+'"'+".")
        })
        
    }

}
export const homePage = new HomePage();