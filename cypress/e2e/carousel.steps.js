import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import Homepage from "../../pages/HomePage"

const homepage = new Homepage;

Given('User visits the Homepage', () => {
    homepage.goHome();
})

Then('Number of indicators equals number of carousel items', () => {
    homepage.carouselItems().children().then($elements => {
        let elementCount = $elements.length;
        homepage.carouselIndicators().children().should('have.length',elementCount);
    });
})

When('User clicks on next arrow', () => {
    homepage.nextButton().click();
})

Then('Next indicator should be active', () => {
    homepage.nthCarouselIndicator(2).should('have.class','active');
})

When('User can see last carousel item', () => {
    homepage.lastCarouselIndicator().click();
    homepage.nthCarouselItem(3).should('have.class','active');
})

Then('First indicator should be active', () => {
    homepage.nthCarouselIndicator(1).should('have.class','active');
})