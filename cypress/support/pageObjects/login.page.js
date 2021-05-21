import Page from "./page";



class LoginPage extends Page{

    linkHeader = () => cy.get('.site-name');
    header = () => cy.get('h1');
    fieldEmail = () => cy.get('#normal_login_email');
    fieldPassword = () => cy.get('#normal_login_password');
    btnSubmit = () => cy.get('.login-form-button');

    userLogin(email, password) {
        this.fieldEmail().type(email);
        this.fieldPassword().type(password);
        this.btnSubmit().click();
    }
}
 export default LoginPage