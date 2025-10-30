import userData from '../fixtures/users/userData.json'


describe('Orange HRM test', () => {// nome do site ou projeto que estou automatizando
  //nome da pagina ou automaçao que estou fazendo



  const SelectorsList = {
     usernameField: '[name="username"]' ,
     passwordField: '[name="password"]' ,
     loginButton: '.oxd-button' ,
     sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text' ,
     dashboardGrid: '.oxd-layout-context' ,
     wrongCredentialAtert: '.oxd-alert'

  }

  
  it('Login com sucesso', () => {
  //it.skip - colocar .skip para nao executar esse bloco de teste

    // link do site que estou testando
    cy.visit('/auth/login')
   
    //preenche o campo do usuario
    cy.get(SelectorsList.usernameField).type(userData.userSuccess.username)

    // preenche o campo da senha
    cy.get(SelectorsList.passwordField).type(userData.userSuccess.password)
    
    //aperta o botao entrar
    cy.get(SelectorsList.loginButton).click()

    // verifica se estou na pagina correta
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(SelectorsList.dashboardGrid)
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