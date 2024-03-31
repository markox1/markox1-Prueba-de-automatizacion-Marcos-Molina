import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import {TRASACTIONSUCCESSFUL,DEPOSITSUCCESSFUL,CUSTOMERLOGIN,USER_HARRY, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTHARRY2,ACCOUNTHARRY3} from "../variables/variable"

describe('TEST con usuario Harry', () => {
    const loginPage = new LoginPage();
    const accountPage= new AccountPage();
    it('TEST  de login con Harry cuenta Dolares', () => {
        loginPage.visit(URL);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_HARRY);
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
    it('TEST de cambio de cuenta de Harry POUND', () => {
        loginPage.visit(URLACCOUNT);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_HARRY);
        loginPage.clickLoginButton();
        accountPage.clickAccountOfUser(ACCOUNTHARRY2);
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
    it('TEST de cambio de cuenta de Harry RUPEE', () => {
        loginPage.visit(URLACCOUNT);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_HARRY);
        loginPage.clickLoginButton();
        accountPage.clickAccountOfUser(ACCOUNTHARRY3);
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

