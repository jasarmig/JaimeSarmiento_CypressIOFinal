var locators = {
    prodDetail : ".product-deatil",
    addBtn : ".btn-lg",
    navCart : '#cartur',
    endpoint : "/addtocart"
}

class ProductPage{

    getDetail(){
        return cy.get(`${locators.prodDetail}`);
    }

    clickAddToCart(){
        cy.intercept('POST', locators.endpoint)
            .as('addedToCart')
            .then(() => {
                cy.get(`${locators.addBtn}`).click();
            })
    }

    getInterceptedResponse(){
        return cy.get('@addedToCart')
            .then(response => {
                return (response)
            })
    }

    goToCart() {
        cy.get(`${locators.navCart}`).click();
    }
    
}

export default ProductPage;