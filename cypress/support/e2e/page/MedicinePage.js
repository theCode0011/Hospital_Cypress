const medicines = require("../../../fixtures/medicines.json")


class MedicinePage{

    constructor(){
        this.title="[jhitranslate='hospitalApp.medicine.home.title']";
        this.medicine="tr > td:nth-child(2)";
        this.description = "tr > td:nth-child(3)"
    }

    isPageOpened(){
        cy.get(this.title).then((text)=>{
            expect(text).to.have.text("Medicines")
        })
    }

    getMedicines(){
        const medicines = [];
        cy.get(this.medicine).each((element)=>{
            cy.wrap(element).invoke('text').then((el)=>{
                medicines.push(el)
            })
        })
        cy.get(medicines).as('medicines')
    }

    getDescription(){
        const descr = [];
        cy.get(this.description).each((element)=>{
            cy.wrap(element).invoke('text').then((el)=>{
                descr.push(el)
            })
        })
        cy.get(descr).as('descr')
    }

    isMedicineCorespondDescr(){
        const descrArray = [];
       medicinePage.getMedicines()
       medicinePage.getDescription()
       cy.get('@descr').each((desc)=>{descrArray.push(desc)})

        cy.get('@medicines').each((element, index)=>{
            cy.log(medicines[element])
            expect(medicines[element]).not.to.be.empty
            expect(medicines[element]).to.equal(descrArray[index])
        })
    }

}

export const medicinePage = new MedicinePage()