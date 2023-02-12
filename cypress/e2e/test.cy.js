const  {login} = require("../support/e2e/page/login/Login")
const { homePage } = require("../support/e2e/page/HomePage")
const { empPage } = require("../support/e2e/page/EmployeesPage")
const {jobPage} = require("../support/e2e/page/JobPage")
const {taskPage} = require("../support/e2e/page/TaskPage")
const {medicinePage} = require("../support/e2e/page/MedicinePage")


const authData = require("../fixtures/autorizationData.json")
const entities = require("../fixtures/entities.json")



describe('userTests', ()=>{

    it('isLoggedSuccesful', ()=>{
    login.login(authData.userName, authData.userPass);
    homePage.isAutorizedCorrect(authData.userName)
    })
    
    it('employersCorrectlyTrackedCheck', ()=>{
        login.login(authData.userName, authData.userPass);
        homePage.isAutorizedCorrect(authData.userName)
        homePage.getHeader().getEntityPage(entities.EMPLOYEE)
        empPage.isPageOpened()
        empPage.validateEmpData()
    })

    it('isEachEmployerHaveTrackedJob',() => {
        login.login(authData.userName, authData.userPass);
        homePage.isAutorizedCorrect(authData.userName);
        homePage.getHeader().getEntityPage(entities.EMPLOYEE)
        empPage.getCompleteName();
        homePage.getHeader().getEntityPage(entities.JOB)
        jobPage.isPageOpened()
        jobPage.getJobTitles()
        jobPage.eachEmplHaveJobTitleCheck()

    })

    it.only('isEachTitleHaveTask', ()=>{
        login.login(authData.userName, authData.userPass);
        homePage.isAutorizedCorrect(authData.userName);
        homePage.getHeader().getEntityPage(entities.TAKS)
        taskPage.isPageOpened()
        taskPage.isEachTitleHaveTask();
    })

    it('isMedicineRightTracked', ()=>{
        login.login(authData.userName, authData.userPass);
        homePage.isAutorizedCorrect(authData.userName);
        homePage.getHeader().getEntityPage(entities.MEDICINE)
        medicinePage.isPageOpened()
        medicinePage.isMedicineCorespondDescr()
    })
})