var locators = {
    logout : "#logout2",
    navbarUser : '#nameofuser'
}

class LoggedHomepage {

    getUserName() {
        return cy.get(`${locators.navbarUser}`);
    }

    getLogoutBtn() {
        return cy.get(`${locators.logout}`);
    }
}

export default LoggedHomepage;