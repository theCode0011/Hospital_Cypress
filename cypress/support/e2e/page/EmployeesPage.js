const { validService} = require('../../service/ValidationService');

class EmployeesPage{

     constructor(){
        this.title="[jhitranslate='hospitalApp.employee.home.title']";
        this.empName = "tr >td:nth-child(2)";
        this.empSurname = "tr >td:nth-child(3)";
        this.empEmail = "tr >td:nth-child(4)";
        this.empPhone = "tr >td:nth-child(5)";
        this.empSalary = "tr >td:nth-child(7)";
     }

   isPageOpened(){
      cy.get(this.title).then((text)=>{
         expect(text).to.have.text("Employees")
        })
     }

   getEmpName(){
    var listOfNames =[];
      cy.get(this.empName).each((element)=>{
        cy.wrap(element).invoke('text').then((val)=>{
            listOfNames.push(val)
          })
       })
       cy.get(listOfNames).as('eText')
   }

   getEmpSurname(){
      var listOfSurnames = [];
      cy.get(this.empSurname).each((element)=>{
         cy.wrap(element).invoke('text').then((val)=>{
               listOfSurnames.push(val)
         })
      })
      cy.get(listOfSurnames).as('eText');
   }

   getEmpPhone(){
      var listOfPhones = [];
      cy.get(this.empPhone).each((element)=>{
         cy.wrap(element).invoke('text').then((val)=>{
            listOfPhones.push(val)
         })
      })
      cy.get(listOfPhones).as('ePhone')
   }

   getEmpEmail(){
      const phoneNumbers = [];
      cy.get(this.empEmail).each((element)=>{
         cy.wrap(element).invoke('text').then((val)=>{
            phoneNumbers.push(val)
         })
      })
      cy.get(phoneNumbers).as('emails')
   }

   getCompleteName(){
      const names = [] ;
      const surnames = [];
      const fullName = [];
      
      empPage.getEmpName();
      cy.get('@eText').each((element)=>{names.push(element)})
      empPage.getEmpSurname();
      cy.get('@eText').each((element)=>{surnames.push(element)})
      .then(function(){
         for(let i=0;i<names.length;i++){
           fullName.push(names[i]+" "+surnames[i])
           cy.log("complete name : "+names[i]+" "+surnames[i])
         }
      })
      
      cy.get(fullName).as('eText')
   }


   validateEmpData(){
      empPage.getCompleteName()
      validService.validateText()
      empPage.getEmpEmail()
      validService.validateEmail()
      empPage.getEmpPhone()
      validService.validatePhoneNumber()
   }

}
export const empPage =  new EmployeesPage()