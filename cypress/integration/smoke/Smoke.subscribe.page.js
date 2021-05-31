import SubscribePage from "../../support/pageObjects/subscribe.page";
import LoginPage from "../../support/pageObjects/login.page";
import data from "../../fixtures/example.json";
import Page from "../../support/pageObjects/page";


const subscribePage = new SubscribePage();
const loginPage = new LoginPage();
const  page = new Page();

describe('Smoke testing for subscribe page', () => {

    before(() => {
        subscribePage.open();
    });

    describe('Role GUEST', () => {

        it('elements exists', () => {
            subscribePage.topMenuGuestExists();
            subscribePage.elementsExists();
            subscribePage.footerExist();
        });

        it('Labels are correct', () => {
            subscribePage.topMenuGuestLabelsCorrect();
            subscribePage.labelsAreCorrect();
            subscribePage.footerLabelsAreCorrect();
        });

        it('Submit button is enabled after email field filled in with valid data', () => {
           subscribePage.submitBtnIsEnabled(data.userEmail);
        });

    });

    describe('Role User', () => {

        before(() => {
            cy.login(data.userEmail, data.userPassword);
            page.isOpen();
            subscribePage.open();

        });

        it('elements exists', () => {
           // subscribePage.open();
            subscribePage.topMenuUserExists();
            subscribePage.elementsExists();
            subscribePage.footerExist();
        });

        it('Labels are correct', () => {
            subscribePage.topMenuUserLabelsCorrect();
            subscribePage.labelsAreCorrect();
            subscribePage.footerLabelsAreCorrect();
        });

        it('Submit button is enabled after email field filled in with valid data', () => {
            subscribePage.submitBtnIsEnabled(data.userEmail);
        });
    });
});
