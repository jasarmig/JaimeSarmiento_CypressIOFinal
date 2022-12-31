var locators = {
    carouselNext : '.carousel-control-next',
    carouselIndicators : '.carousel-indicators',
    carouselItem : '.carousel-item',
    navLink : '.nav-link',
    navCart : '#cartur',
    navLogin : '#login2',
    contact : '#exampleModal',
    about :  '#videoModal',
    login : '#logInModal',
    signup : '#signInModal',
    loginUser : '#loginusername',
    loginPass : '#loginpassword',
    loginButton : '#logInModal .btn-primary',
    categories : '.list-group-item',
    categoryItems: '#tbodyid>div'
}

class Homepage {

    getUrl() {
        return cy.url();
    }

    //Navigation method to go to the homepage
    goHome() {
        cy.visit('/index.html');
    }

    //Carousel feature-related methods

    nextButton() {
        return cy.get(`${locators.carouselNext}`);
    }

    nthCarouselIndicator(position) {
        return cy.get(`${locators.carouselIndicators} > li:nth-child(${position})`);
    }

    lastCarouselIndicator() {
        return cy.get(`${locators.carouselIndicators} > li:last-child`)
    }
    
    carouselIndicators() {
        return cy.get(`${locators.carouselIndicators}`);
    }
    
    carouselItems() {
        return cy.get(`${locators.carouselItem}`);
    }

    nthCarouselItem(position) {
        return cy.get(`${locators.carouselItem}:nth-child(${position})`);
    }

    //Navbar feature-related methods

    goToCart() {
        cy.get(`${locators.navCart}`).click();
    }

    clickNavLink(navItem) {
        return cy.get(`${locators.navLink}`).contains(navItem).click();
    }

    getModal(navItem) {
        switch(navItem){
            case "Contact":
                return cy.get(`${locators.contact}`);
            case "About us":
                return cy.get(`${locators.about}`);
            case "Log in":
                return cy.get(`${locators.login}`);
            default:
                return cy.get(`${locators.signup}`);
        }
    }

    login(login, user, pass) {
        this.clickNavLink(login)
        this.getModal(login).should('be.visible');
        cy.wait(250);
        this.setUser(user);
        cy.wait(250);
        this.setPass(pass);
+       cy.get(`${locators.loginButton}`).click();
    }

    setUser(user) {
        return cy.get(`${locators.loginUser}`).type(user);
    }

    setPass(pass) {
        return cy.get(`${locators.loginPass}`).type(pass);
    }

    getLogout(logout) {
        cy.get(`${locators.navLink}`).contains(logout);
    }

    getUsername(welcome, user) {
        cy.get(`${locators.navLink}`).contains(welcome + user);
    }

    // Purchase-realted methods

    clickRandomCategory() {
        let child = Math.floor(Math.random() * 3) + 2;
        cy.get(`${locators.categories}:nth-child(${child})`).click();
    }

    getCategoryElements() {
        return cy.get(`${locators.categoryItems}`);
    }

    clickRandomItem() {
        let child = Math.floor(Math.random() * 9) + 1;
        cy.get(`${locators.categoryItems}:nth-child(${child}) .hrefch`).click();
    }

    // API endpoint intercept
    getResponse(endpoint) {
        return cy.request(endpoint).as('clickResponse')
            .then(response => {
                return (response.status)
            })
    }
}

export default Homepage;