import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import Homepage from "../../pages/HomePage"
import ProductPage from "../../pages/ProductPage";
import Cart from "../../pages/Cart";
import params from "../../fixtures/params.json"

const homepage = new Homepage;
const product = new ProductPage;
const cart = new Cart;

Given('User visits the Homepage', () => {
    homepage.goHome();
})

When('User clicks on a category', () => {
    homepage.clickRandomCategory();
    homepage.getResponse(params.endpoint).should('eq',200);
})

Then('Amount of elements decreases', () => {
    homepage.getCategoryElements().should('have.length.lessThan',9);
})

When('User clicks on a product', () => {
    homepage.clickRandomItem();
})

When('User is redirected to product page', () => {
    product.getDetail().should('be.visible');
})

When('User clicks add to cart button', () => {
    product.clickAddToCart();
    product.getInterceptedResponse().its('response.statusCode').should('eq',200);
})

Then('A product is added to the Cart', () => {
    product.goToCart();
    cart.getCartItems().should('have.length.greaterThan',0);
})

When('User has one product in the Cart', () => {
    homepage.clickRandomItem();
    product.clickAddToCart();
    product.goToCart();
})

When("User clicks on the item's delete link", () => {
    cart.getDeleteLink().click();
})

Then('The cart should be empty', () => {
    cart.getCartItems().should('not.exist');
})

When('User clicks on Place Order button', () => {
    cart.getPurchaseBtn().click();
})

When('User completes purchase', () => {
    cart.completePurchase(params);
})

Then('Receives a purchase confirmation', () => {
    cart.getPurchaseConfirmation().should('be.visible');
})