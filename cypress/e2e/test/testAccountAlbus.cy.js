import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import {TRASACTIONS,MOUNTFAILED,TRASACTIONFAILED,TRASACTIONSUCCESSFUL,DEPOSITSUCCESSFUL,CUSTOMERLOGIN,USER_ALBUS, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTALBUS2,ACCOUNTALBUS3} from "../variables/variable"
import { format } from 'date-fns'
describe('TEST con usuario Albus, se realizan pruebas depositos y retiros además que se resetea en transacción', () => {
    const loginPage = new LoginPage();
    const accountPage= new AccountPage();
 
    it('TEST  de login con Albus cuenta Dolares', () => {
        loginPage.visit(URL);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_ALBUS);
        loginPage.clickLoginButton();
        accountPage.clickButtonByText(DEPOSIT);
        const currentDateTimeAfterClick = format(new Date(), "yyyy-MM-dd'T'HH:mm")
        accountPage.clickAmount(MOUNTDEPOSIT);
        accountPage.clickBtnSubmit();
        accountPage.assertTransactionSuccessful(DEPOSITSUCCESSFUL);
        accountPage.clickButtonByText(WITHDRAWL);
        accountPage.await();
        accountPage.clickAmount(MOUNTWITHDRAWL);
        accountPage.clickBtnSubmit(); 
        accountPage.assertTransactionSuccessful(TRASACTIONSUCCESSFUL);
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
    });
   it('TEST de cambio de cuenta de Albus POUND', () => {
        loginPage.visit(URLACCOUNT);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_ALBUS);
        loginPage.clickLoginButton();
        accountPage.clickAccountOfUser(ACCOUNTALBUS2);
        accountPage.clickButtonByText(DEPOSIT);
        accountPage.clickAmount(MOUNTDEPOSIT);
        accountPage.clickBtnSubmit();
        accountPage.assertTransactionSuccessful(DEPOSITSUCCESSFUL);
        accountPage.clickButtonByText(WITHDRAWL);
        accountPage.await();
        accountPage.clickAmount(MOUNTWITHDRAWL);
        accountPage.clickBtnSubmit();
        accountPage.assertTransactionSuccessful(TRASACTIONSUCCESSFUL);
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
    });
    it('TEST de cambio de cuenta de Albus RUPEE', () => {
        loginPage.visit(URLACCOUNT);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_ALBUS);
        loginPage.clickLoginButton();
        accountPage.clickAccountOfUser(ACCOUNTALBUS3);
        accountPage.clickButtonByText(DEPOSIT);
        accountPage.clickAmount(MOUNTDEPOSIT);
        accountPage.clickBtnSubmit();
        accountPage.assertTransactionSuccessful(DEPOSITSUCCESSFUL);
        accountPage.clickButtonByText(WITHDRAWL);
        accountPage.await();
        accountPage.clickAmount(MOUNTWITHDRAWL);
        accountPage.clickBtnSubmit();
        accountPage.assertTransactionSuccessful(TRASACTIONSUCCESSFUL);
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
    });
    it('TEST para validar que el retiro no sea mayor al deposito', () => {
        loginPage.visit(URL);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_ALBUS);
        loginPage.clickLoginButton();
        accountPage.clickButtonByText(WITHDRAWL);
        accountPage.clickAmount(MOUNTFAILED);
        accountPage.clickBtnSubmit();
        accountPage.assertTransactionFailed(TRASACTIONFAILED);     
    });
})

  