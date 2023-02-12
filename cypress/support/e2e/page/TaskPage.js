import { notDeepEqual } from "assert";

class TaskPage{

    constructor(){
        this.title="[jhitranslate='hospitalApp.task.home.title']";
        this.titleTask='tr > td:nth-child(2)'
        this.description='tr > td:nth-child(3)'
    }

    isPageOpened(){
        cy.get(this.title).then((text)=>{
            expect(text).to.have.text('Tasks')
        })
    }

    getTitles(){
        const titles = [];
        cy.get(this.titleTask).each((element)=>{
            cy.wrap(element).invoke('text').then((el)=>{
               titles.push(el) 
            })
        })
        cy.get(titles).as('titles')
    }

    getDescriptions(){
        const descriptions = [];
        cy.get(this.description).each((element)=>{
            cy.wrap(element).invoke('text').then((el)=>{
                descriptions.push(el)
            })
        })
        cy.get(descriptions).as('descriptions')
    }

    isEachTitleHaveTask(){
        const title = [];
        taskPage.getTitles();
        taskPage.getDescriptions();
        cy.get('@titles').each((element)=>{title.push(element)})
         cy.get('@descriptions').each((element, index)=>{
            if(element.length===0){
                cy.log(title[index] + " have no description ") 
            }
        })
    }

}

export const taskPage = new TaskPage()