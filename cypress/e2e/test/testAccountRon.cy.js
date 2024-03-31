import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import {TRASACTIONSUCCESSFUL,DEPOSITSUCCESSFUL,CUSTOMERLOGIN,USER_RON, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTRON2,ACCOUNTRON3} from "../variables/variable"

describe('TEST con usuario Ron', () => {
    const loginPage = new LoginPage();
    const accountPage= new AccountPage();
    it('TEST  de login con Ron cuenta Dolares', () => {
        loginPage.visit(URL);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_RON);
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
    it('TEST de cambio de cuenta de Ron POUND', () => {
        loginPage.visit(URLACCOUNT);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_RON);
        loginPage.clickLoginButton();
        accountPage.clickAccountOfUser(ACCOUNTRON2);
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
    it('TEST de cambio de cuenta de Ron RUPEE', () => {
        loginPage.visit(URLACCOUNT);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_RON);
        loginPage.clickLoginButton();
        accountPage.clickAccountOfUser(ACCOUNTRON3);
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

