class DashboardPage{
        selectorsList() {
            const selectors =  {
                 sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text' ,
                 dashboardGrid:'.oxd-layout-context' ,
        }
        return selectors
    }

    checkDashboarPage(){
        cy.location('pathname').should('equal','/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

}
export default DashboardPage