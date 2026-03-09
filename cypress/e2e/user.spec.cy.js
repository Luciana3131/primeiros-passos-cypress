import userData from '../fixtures/users/userData.json'


describe('Orange HRM test', () => {// nome do site ou projeto que estou automatizando
  //nome da pagina ou automaçao que estou fazendo


  // criar um objeto dentro de outro objeto com os campos de login com sucesso e fail

  // javascript

  const SelectorsList = {
     usernameField:'[name="username"]',
     passwordField:'[name="password"]',
     loginButton:'.oxd-button',
     sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text' ,
     dashboardGrid:'.oxd-layout-context' ,
     wrongCredentialAtert: '.oxd-alert',
     myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
     firstNameField:'[name="firstName"]',
     lastNameField:'[name="lastName"]',
     genericField:'.oxd-input--active',
     dateField:'[placeholder="yyyy-dd-mm"]',
     dateCloseButton:".--close",
     submitButton:"[type='submit']",
     
    // selectText:'.oxd-select-text--active'
  }

  
  it.only('User Info Update', () => {
  
    cy.visit('/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(SelectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(SelectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(SelectorsList.dashboardGrid)

    cy.get(SelectorsList.myInfoButton).click()
    cy.get(SelectorsList.firstNameField).clear().type('Ana')
    cy.get(SelectorsList.lastNameField).clear().type('Pereira')
    cy.get(SelectorsList.genericField).eq(3).clear().type('EmployeeT')
    cy.get(SelectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(SelectorsList.genericField).eq(5).clear().type('Drivers Licence Number test')
    cy.get(SelectorsList.genericField).eq(6).clear().type('2027-07-03')
    cy.get(SelectorsList.dateCloseButton).click()
    //cy.get(SelectorsList.genericField).eq(7).type('1990-03-03')
    cy.get(SelectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    
  }) 


  it('Login - fail', () => {

    // link do site que estou testando
    cy.visit('/auth/login')
   
    //preenchendo o campo do usuario com nome invalido
    cy.get(SelectorsList.usernameField).type(userData.userFail.username)

    // preenchendo o campo da senha com senha errada
    cy.get(SelectorsList.passwordField).type(userData.userFail.password)
    
    //apertar o botao entrar e retornar menssagem de erro
    cy.get(SelectorsList.loginButton).click()
    
    //verifica a menssagem de erro
    cy.get(SelectorsList.wrongCredentialAtert)
  })
})