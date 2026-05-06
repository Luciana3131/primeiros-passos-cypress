class MyInfoPage {

    selectorsList() {

        const selectors = {

            myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField:'[name="firstName"]',
            lastNameField:'[name="lastName"]',
            genericField:'.oxd-input--active',
            dateField:'[placeholder="yyyy-dd-mm"]',
            dateCloseButton:".--close",
            submitButton:"[type='submit']",
            genericSelectButton:".oxd-select-text--active",
            genericDropdownButton:'.oxd-select-dropdown'

        }
        return selectors
    }

    fillPersonalDetails(firstName , lastName) {

        cy.get(this.selectorsList().myInfoButton).click({force:true})
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherIdTest,driversLicenceNumbertest,licenseExpiryDate){

        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherIdTest)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumbertest)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        
    }

    saveform() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    fillStatus(){

        cy.get(this.selectorsList().genericSelectButton).eq(0).click({force: true })
        cy.get(this.selectorsList().genericDropdownButton).contains('Brazilian').click({force: true })

        cy.get(this.selectorsList().genericSelectButton).eq(1).click({force: true })
        cy.get(this.selectorsList().genericDropdownButton).contains('Other').click({force: true })
    
        cy.get(this.selectorsList().genericSelectButton).eq(2).click({force: true })
        cy.get(this.selectorsList().genericDropdownButton).contains('AB+').click({force: true })

       

    }
    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAtert)
    }

}
export default MyInfoPage