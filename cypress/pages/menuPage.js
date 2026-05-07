class MenuPage{

    selectorsList() {
       const selectors = {
            myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
            PerformanceButton:'[href="/web/index.php/performance/viewPerformanceModule"]',
         
        }
        return selectors

    }
    accessMyInfo() {

       cy.get(this.selectorsList().myInfoButton).click({force:true})
      
    } 
    accessPerformace(){
        cy.get(this.selectorsList().PerformanceButton).click()
    }
}

export default MenuPage