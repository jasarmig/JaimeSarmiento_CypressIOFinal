var locators = {
    home : ".nav-item:first-child",
    cartItems : ".success",
    deleteLink : "td>a",
    purchaseBtn : ".btn-success",
    nameInput : "#name",
    countryInput : "#country",
    cityInput: "#city",
    cardInput: "#card",
    monthInput: "#month",
    yearInput: "#year",
    orderBtn: "#orderModal .btn-primary",
    purchaseConfirmation: ".sweet-alert"
}

class Cart {

    getUrl() {
        return cy.url();
    }

    getHomeBtn() {
        return cy.get(`${locators.home}`);
    }

    getCartItems() {
        return cy.get(`${locators.cartItems}`);
    }

    getDeleteLink() {
        return cy.get(`${locators.deleteLink}`);
    }

    getPurchaseBtn() {
        return cy.get(`${locators.purchaseBtn}`);
    }

    getPurchaseConfirmation() {
        return cy.get(`${locators.purchaseConfirmation}`);
    }

    completePurchase(params) {
        cy.get(`${locators.nameInput}`).type(params.nameInput);
        cy.wait(250);
        cy.get(`${locators.countryInput}`).type(params.countryInput);
        cy.wait(250);
        cy.get(`${locators.cityInput}`).type(params.cityInput);
        cy.wait(250);
        cy.get(`${locators.cardInput}`).type(params.cardInput);
        cy.wait(250);
        cy.get(`${locators.monthInput}`).type(params.monthInput);
        cy.wait(250);
        cy.get(`${locators.yearInput}`).type(params.yearInput);
        cy.wait(250);
        cy.get(`${locators.orderBtn}`).click();
    }

}

export default Cart;