import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import Homepage from "../../pages/HomePage"
import LoggedHomepage from "../../pages/LoggedHomepage";
import Cart from "../../pages/Cart";
import params from "../../fixtures/params.json"

const homepage = new Homepage;
const loggedHome = new LoggedHomepage;
const cart = new Cart;

Given('User visits the Homepage', () => {
    homepage.goHome();
})

When('User clicks on cart navigation', () => {
    homepage.goToCart();
})

Then('User is on the cart', () => {
    cart.getUrl().should('eq',params.cartUrl);
})

When('User is at the cart', () => {
    homepage.goToCart();
})

When('User clicks on home navigation', () => {
    cart.getHomeBtn().click();
})

Then('User navigates to Homepage',() => {
    homepage.getUrl().should('eq',params.homeUrl);
})

When('User clicks on {string}', navItem => {
    homepage.clickNavLink(navItem);
})

Then('{string} modal is displayed', navItem => {
    homepage.getModal(navItem).should('be.visible');
})

When('User logs in', () => {
    homepage.login(params.loginNav,params.user,params.pass);
})

Then('Navbar shows logout', () => {
    loggedHome.getLogoutBtn(params.logoutNav).should('be.visible');
})

Then('Navbar shows user name', () => {
    loggedHome.getUserName(params.welcome,params.user).should('be.visible');
})