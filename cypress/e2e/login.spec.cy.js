describe('Orange HRM test', () => {// nome do site ou projeto que estou automatizando
  //nome da pagina ou automaçao que estou fazendo

  it('Login com sucesso', () => {
  //it.skip - colocar .skip para nao executar esse bloco de teste

    // link do site que estou testando
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
    //preenche o campo do usuario
    cy.get('[name="username"]').type('Admin')

    // preenche o campo da senha
    cy.get('[name="password"]').type('admin123')
    
    //aperta o botao entrar
    cy.get('.oxd-button').click()

    // verifica se estou na pagina correta
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  }) 


  it('Login - fail', () => {

    // link do site que estou testando
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
    //preenchendo o campo do usuario com nome invalido
    cy.get('[name="username"]').type('test')

    // preenchendo o campo da senha com senha errada
    cy.get('[name="password"]').type('test')
    
    //apertar o botao entrar e retornar menssagem de erro
    cy.get('.oxd-button').click()
    
    //verifica a menssagem de erro
    cy.get('.oxd-alert')
  })
})