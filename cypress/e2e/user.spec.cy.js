import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MyInfoPage from '../pages/myInfoPage'
import MenuPage from '../pages/menuPage'

const Chance = require('chance')

const chance  =  new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM test', () => {
 
  it('User Info Update - Success', () => {
  
   loginPage.accessLoginPage()
   loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

   dashboardPage.checkDashboarPage()

   menuPage.accessMyInfo()

   menuPage.accessPerformace()
   myInfoPage.fillPersonalDetails(chance.first() , chance.last())
   myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherIdTest', '2027-07-07', '2028-07-07')
   myInfoPage.fillStatus()
   myInfoPage.saveform()
    
  }) 
})