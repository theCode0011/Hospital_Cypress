
const { empPage } = require("../page/EmployeesPage")

class JobPage{

    constructor(){
        this.title="[jhitranslate='hospitalApp.job.home.title']";
        this.jobTitleList = "tr >td:nth-child(2)";
        this.empNamesList = "tr >td:nth-child(5)";

    }

    isPageOpened(){
        cy.get(this.title).then((text)=>{
            expect(text).to.have.text('Jobs')
        })
    }

    getJobTitles(){
        const jobTitleTxt =[];
        cy.get(this.jobTitleList).each((element)=>{
            cy.wrap(element).invoke('text').should('not.be.empty').then((el)=>{
                jobTitleTxt.push(el)
                cy.log("Job title is : "+el)
            })
        })
        cy.get(jobTitleTxt).as('jobTitleTxt')
    }

    getEmpList(){
        const empListTxt = [];       
        
        cy.get(this.empNamesList).each((element)=>{
            cy.wrap(element).invoke('text').should('not.be.empty').then((el)=>{
                empListTxt.push(el)
            })
        })

        cy.get(empListTxt).as('empListTxt')
    }

    eachEmplHaveJobTitleCheck(){
        const fullNameEmpPage = [];
        cy.get('@eText').each((name)=>{fullNameEmpPage.push(name)})
        jobPage.getEmpList()
        cy.get('@empListTxt').each((element)=>{
            cy.wrap(element)
            .should('be.oneOf', fullNameEmpPage) 
        })
    }

}
export const jobPage = new JobPage();