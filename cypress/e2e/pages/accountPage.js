import {URL} from "../variables/variable"

class AccountPage {
    clickButtonByText(buttonText){
        cy.contains(buttonText).click()
      }
      clickAmount(amount){
        cy.get('.form-control').type(amount)
      }
      await(){
        cy.wait(2000)
      }
      clickBtnSubmit()
      {
        cy.get('form[name="myForm"]').find('button').click()
      }
      clickAccountOfUser(account){
        cy.get('#accountSelect').select(account)
      }
      assertTransactionSuccessful(successfull){
        cy.get('.error').should('have.text', successfull);
      }
      assertTransactionFailed(failed){
        cy.get('.error').should('have.text', failed);
      }
      
}
export default AccountPage;  