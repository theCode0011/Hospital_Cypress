
class Header{

    constructor(){
        this.accountMenuBtn = "#account-menu";
        this.loginBtn = "#login";
        this.registerBtn = '[jhitranslate=global.menu.account.register"]';
        this.entityMenu = "#entity-menu";
        this.entityName = ".dropdown-item"
    }

    getSignBtn(){
        cy.get(this.accountMenuBtn).click()
        cy.get(this.loginBtn).click()
    }

    getRegisterBtn(){

    }

    getEntityPage(entityPage){
        cy.get(this.entityMenu).click()
        cy.get(this.entityName).contains(entityPage).click()

    }

}
export const header = new Header();
