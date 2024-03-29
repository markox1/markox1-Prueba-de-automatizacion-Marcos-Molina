describe('implementacion de POM', () => {

    beforeEach(() =>{
    cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
    });

    it('login', () => {
        cy.contains('Customer Login').click()

    });

})