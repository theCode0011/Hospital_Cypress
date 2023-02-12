class ValidationService{

    validateText(){
        const  textPattern = /[A-Z]/g;
    cy.get('@eText').each((el)=>{
        cy.wrap(el).should('match', textPattern)
    })
    }

    validatePhoneNumber(){
        const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        cy.get('@ePhone').each((el)=>{
            cy.wrap(el).should('match', phonePattern)
        })
    }

    validateEmail(){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        cy.get('@emails').each((element)=>{
            cy.wrap(element).should('match', emailPattern)
        })
    }
}
export const validService = new ValidationService()