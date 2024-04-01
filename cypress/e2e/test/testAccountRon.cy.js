import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import {TRASACTIONS,MOUNTFAILED,TRASACTIONFAILED,TRASACTIONSUCCESSFUL,DEPOSITSUCCESSFUL,CUSTOMERLOGIN,USER_RON, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTRON2,ACCOUNTRON3} from "../variables/variable"

describe('TEST con usuario Ron, se realizan pruebas depositos y retiros además que se resetea en transacción', () => {
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
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
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
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
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
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
    });
    it('TEST para validar que el retiro no sea mayor al deposito', () => {
        loginPage.visit(URL);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_RON);
        loginPage.clickLoginButton();
        accountPage.clickButtonByText(WITHDRAWL);
        accountPage.clickAmount(MOUNTFAILED);
        accountPage.clickBtnSubmit();
        accountPage.assertTransactionFailed(TRASACTIONFAILED);     
    });
    
})

