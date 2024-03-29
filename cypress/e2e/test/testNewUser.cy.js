import LoginPage from "../pages/loginPage";
import AccountPage from "../pages/accountPage"
import NewUserPage from "../pages/newUserPage"

import {BANKMANAGERLOGIN,ADDCUSTOMER,USER_RON, DEPOSIT, MOUNTDEPOSIT,WITHDRAWL,MOUNTWITHDRAWL,URL,URLACCOUNT,ACCOUNTRON2,ACCOUNTRON3} from "../variables/variable"

describe('TEST con usuario Nuevo', () => {
    const loginPage = new LoginPage();
    const accountPage= new AccountPage();
    const newUserPage= new NewUserPage();
    
    it('TEST   ', () => {
        loginPage.visit(URL);
        loginPage.clickUserSelect(BANKMANAGERLOGIN);
        accountPage.clickButtonByText(ADDCUSTOMER);
        newUserPage.typeName();
        newUserPage.typeLastName();
        newUserPage.typePostCode();
        accountPage.clickBtnSubmit();
    });
    
    
})

