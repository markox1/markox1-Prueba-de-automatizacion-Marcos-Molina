import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import NewUserPage from "../pages/newUserPage"

import {TRASACTIONSUCCESSFUL,DEPOSITSUCCESSFUL,CUSTOMERLOGIN,USER_NEW_ACCOUNTDOLLAR,USER_NEW,OPENACCOUNT,BANKMANAGERLOGIN,ADDCUSTOMER,USER_RON, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTRON2,ACCOUNTRON3} from "../variables/variable"
describe('Pruebas creando usuario y depositando en la cuenta', () => {
    const loginPage = new LoginPage();
    const accountPage= new AccountPage();
    const newUserPage= new NewUserPage();
    beforeEach(() => {
    // Aquí puedes realizar la configuración necesaria que deseas hacer solo una vez antes de todas las pruebas
    loginPage.visit(URL);
    loginPage.clickUserSelect(BANKMANAGERLOGIN);
  });

  it('Prueba creando Customer y seleccionandola para loguearse con ella, además hacer deposito y retiros', () => { 
    accountPage.clickButtonByText(ADDCUSTOMER);
    newUserPage.typeName();
    newUserPage.typeLastName();
    newUserPage.typePostCode();
    accountPage.clickBtnSubmit();
    accountPage.clickButtonByText(OPENACCOUNT);
    loginPage.fillUsername(USER_NEW);
    newUserPage.fillCurrency(USER_NEW_ACCOUNTDOLLAR);
    accountPage.clickBtnSubmit();
    newUserPage.clickHome();
    loginPage.clickUserSelect(CUSTOMERLOGIN);
    loginPage.fillUsername(USER_NEW);
    loginPage.clickLoginButton();
    accountPage.clickButtonByText(DEPOSIT);
    accountPage.clickAmount(MOUNTDEPOSIT);
    accountPage.clickBtnSubmit();
    accountPage.assertTransactionSuccessful(DEPOSITSUCCESSFUL);
    accountPage.clickButtonByText(WITHDRAWL);
    accountPage.await();
    accountPage.clickAmount(MOUNTWITHDRAWL);
    accountPage.clickBtnSubmit(); 
    accountPage.assertTransactionSuccessful(TRASACTIONSUCCESSFUL);
  });
  
});