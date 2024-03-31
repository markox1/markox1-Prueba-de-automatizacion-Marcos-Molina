import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import NewUserPage from "../pages/newUserPage"

import {DELETECUSTOMER,USER_NEW_ACCOUNTDOLLAR,USER_NEW,OPENACCOUNT,BANKMANAGERLOGIN,ADDCUSTOMER,USER_RON, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTRON2,ACCOUNTRON3} from "../variables/variable"

describe('Pruebas sin reiniciar la URL', () => {
    const loginPage = new LoginPage();
    const accountPage= new AccountPage();
    const newUserPage= new NewUserPage();
    beforeEach(() => {
    // Aquí puedes realizar la configuración necesaria que deseas hacer solo una vez antes de todas las pruebas
    loginPage.visit(URL);
    loginPage.clickUserSelect(BANKMANAGERLOGIN);
  });

  it('Prueba para agregar un Customer', () => {
    accountPage.clickButtonByText(ADDCUSTOMER);
        newUserPage.typeName();
        newUserPage.typeLastName();
        newUserPage.typePostCode();
        accountPage.clickBtnSubmit();
        newUserPage.assertAddCustomer()
  });

  it('Prueba para agregar un Customer y agregarle una cuenta en dolares', () => {
    accountPage.clickButtonByText(ADDCUSTOMER);
    newUserPage.typeName();
    newUserPage.typeLastName();
    newUserPage.typePostCode();
    accountPage.clickBtnSubmit();
    accountPage.clickButtonByText(OPENACCOUNT);
    loginPage.fillUsername(USER_NEW);
    newUserPage.fillCurrency(USER_NEW_ACCOUNTDOLLAR);
    accountPage.clickBtnSubmit();
    newUserPage.assertAddAccount();
  });
  it('Prueba que agrupa las anteriores pruebas y además elminar el customer agregado', () => { 
    accountPage.clickButtonByText(ADDCUSTOMER);
    newUserPage.typeName();
    newUserPage.typeLastName();
    newUserPage.typePostCode();
    accountPage.clickBtnSubmit();
    accountPage.clickButtonByText(OPENACCOUNT);
    loginPage.fillUsername(USER_NEW);
    newUserPage.fillCurrency(USER_NEW_ACCOUNTDOLLAR);
    accountPage.clickBtnSubmit();
    accountPage.clickButtonByText(DELETECUSTOMER);
    newUserPage.deleteCustomer();
  });

  
});