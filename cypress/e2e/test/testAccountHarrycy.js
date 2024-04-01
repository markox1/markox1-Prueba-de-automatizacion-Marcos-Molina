import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import {TRASACTIONS,MOUNTFAILED,TRASACTIONFAILED,TRASACTIONSUCCESSFUL,DEPOSITSUCCESSFUL,CUSTOMERLOGIN,USER_HARRY, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTHARRY2,ACCOUNTHARRY3, USER_HERMOINE} from "../variables/variable"

describe('TEST con usuario Harry, se realizan pruebas depositos y retiros además que se resetea en transacción', () => {
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
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
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
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
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
        cy.reload();
        accountPage.clickButtonByText(TRASACTIONS);
        accountPage.clickReset();
    });
    it('TEST para validar que el retiro no sea mayor al deposito', () => {
        loginPage.visit(URL);
        loginPage.clickUserSelect(CUSTOMERLOGIN);
        loginPage.fillUsername(USER_HARRY);
        loginPage.clickLoginButton();
        accountPage.clickButtonByText(WITHDRAWL);
        accountPage.clickAmount(MOUNTFAILED);
        accountPage.clickBtnSubmit();
        accountPage.assertTransactionFailed(TRASACTIONFAILED);     
    });
})

