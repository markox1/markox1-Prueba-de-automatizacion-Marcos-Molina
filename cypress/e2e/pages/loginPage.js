import {URL} from "../variables/variable"
class LoginPage {
    visit() {
      cy.visit(URL);
    }
    clickUserSelect(){
        cy.contains('Customer Login').click()
    }
    fillUsername(user) {
        cy.get('#userSelect').select(user);
      }
      clickLoginButton(){
        cy.contains('Login').click();
      }
      
      
}
export default LoginPage;  