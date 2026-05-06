class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField:'[name="username"]',
            passwordField:'[name="password"]',
            loginButton:'.oxd-button',
            wrongCredentialAtert: '.oxd-alert',
        }
        return selectors
    }

    accessLoginPage() {

        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()


    }
    
    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAtert)
    }
    
}

export default LoginPage