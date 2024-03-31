import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import {TRASACTIONSUCCESSFUL,DEPOSITSUCCESSFUL,CUSTOMERLOGIN,USER_ALBUS, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTALBUS2,ACCOUNTALBUS3} from "../variables/variable"

describe('TEST con usuario Albus', () => {
    const loginPage = new LoginPage();
    const accountPage= new AccountPage();
    it('TEST  de login con Albus cuenta Dolares', () => {
        loginPage.visit(URL);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_ALBUS);
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
    });
    
})

